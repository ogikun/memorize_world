import 'package:flutter/material.dart';
import 'package:memorize_world/models.dart';

enum _QuestionType { countryName, capitalCity }

class QuestionPage extends StatefulWidget {
  const QuestionPage.countryName(this.area, {super.key})
      : _questionType = _QuestionType.countryName;

  const QuestionPage.capitalCity(this.area, {super.key})
      : _questionType = _QuestionType.capitalCity;

  final Area area;
  final _QuestionType _questionType;

  @override
  State<QuestionPage> createState() => _QuestionPageState();
}

class _QuestionPageState extends State<QuestionPage> {
  List<Country> remainingCountries = <Country>[];
  List<Country> correctQuestions = <Country>[];
  List<Country> gaveUpQuestions = <Country>[];

  @override
  void initState() {
    remainingCountries = List<Country>.from(widget.area.countries)..shuffle();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final title =
        widget._questionType == _QuestionType.countryName ? '国名' : '首都';

    return Scaffold(
      appBar: AppBar(title: Text('${widget.area.name} - $title')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: remainingCountries.isEmpty
            ? _ResultView(
                correctQuestions: correctQuestions,
                gaveUpQuestions: gaveUpQuestions,
              )
            : _QuestionView(
                country: remainingCountries.first,
                questionType: widget._questionType,
                onAnswered: (isCorrect) {
                  setState(() {
                    final country = remainingCountries.removeAt(0);
                    if (isCorrect) {
                      correctQuestions.add(country);
                    } else {
                      gaveUpQuestions.add(country);
                    }
                  });
                },
              ),
      ),
    );
  }
}

class _QuestionView extends StatefulWidget {
  const _QuestionView({
    required this.country,
    required this.questionType,
    required this.onAnswered,
  });

  final Country country;
  final _QuestionType questionType;
  final ValueChanged<bool> onAnswered;

  @override
  State<_QuestionView> createState() => _QuestionViewState();
}

class _QuestionViewState extends State<_QuestionView> {
  final key = GlobalKey<FormFieldState<String>>();
  int hintCount = 0;

  String get hint => widget.questionType == _QuestionType.countryName
      ? widget.country.name
      : widget.country.capitalCity;

  String get answer => widget.questionType == _QuestionType.countryName
      ? widget.country.nameAnswer
      : widget.country.capitalAnswer;

  String get input => key.currentState?.value ?? '';

  set input(String value) {
    key.currentState?.didChange(value);
  }

  String skipSymbols(String input) {
    if (input.length == answer.length) {
      return input;
    }
    final next = answer[input.length];
    if (!_allowedChars.contains(next)) {
      return skipSymbols(input + next);
    }
    return input;
  }

  void onTapKeyboard(String value) {
    final newValue = input + value;
    final answerChar = answer[newValue.length - 1];
    if (value != answerChar) {
      return;
    }
    setState(() {
      input = skipSymbols(newValue);
    });
    if (input.length == answer.length) {
      submitAnswer();
    }
  }

  void submitAnswer() {
    hintCount = 0;
    widget.onAnswered(true);
    input = '';
  }

  void giveUp() {
    hintCount = 0;
    widget.onAnswered(false);
    input = '';
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
          child: ListView(
            children: [
              Center(
                child: Text(
                  widget.questionType == _QuestionType.countryName
                      ? 'この国の名前は？'
                      : 'この国の首都は？',
                ),
              ),
              Center(child: const SizedBox(height: 8)),
              Image.asset(
                'assets/flags/${widget.country.imageName}.gif',
                height: 80,
              ),
              const SizedBox(height: 8),
              Center(
                child: Text(
                  widget.questionType == _QuestionType.countryName
                      ? '首都：${widget.country.capitalCity}'
                      : widget.country.name,
                ),
              ),
              const SizedBox(height: 16),
              Center(child: const Text('答え')),
              Center(
                child: Builder(
                  builder: (context) {
                    String display = '';
                    for (int i = 0; i < hint.length; i++) {
                      if (i < hintCount) {
                        display += hint[i];
                      } else {
                        display += '＿';
                      }
                    }
                    return Text(
                      display,
                      style: const TextStyle(fontSize: 32),
                    );
                  },
                ),
              ),
              Center(
                child: TextButton(
                    onPressed: () {
                      setState(() {
                        hintCount++;
                      });
                    },
                    child: const Text('ヒント')),
              ),
              const SizedBox(height: 32),
              TextFormField(
                key: key,
                readOnly: true,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                ),
                autofocus: true,
                onFieldSubmitted: (_) {
                  submitAnswer();
                },
                keyboardType: TextInputType.none,
              ),
              const SizedBox(height: 16),
              Center(
                child: OutlinedButton(
                  onPressed: giveUp,
                  child: const Text('あきらめる'),
                ),
              ),
              const SizedBox(height: 32),
            ],
          ),
        ),
        _KeyBoard(
          answer: answer,
          value: input,
          onTap: onTapKeyboard,
        ),
      ],
    );
  }
}

class _ResultView extends StatelessWidget {
  const _ResultView({
    required this.correctQuestions,
    required this.gaveUpQuestions,
  });

  final List<Country> correctQuestions;
  final List<Country> gaveUpQuestions;

  @override
  Widget build(BuildContext context) {
    final tabs = [
      (
        title: '正解した問題 (${correctQuestions.length})',
        questions: correctQuestions
      ),
      (
        title: 'あきらめた問題 (${gaveUpQuestions.length})',
        questions: gaveUpQuestions
      ),
    ];

    return DefaultTabController(
      length: tabs.length,
      child: Column(
        children: [
          TabBar(tabs: tabs.map(((e) => Tab(text: e.title))).toList()),
          Expanded(
              child: TabBarView(
            children: tabs.map((e) {
              return ListView.builder(
                itemCount: e.questions.length,
                itemBuilder: (context, index) {
                  final country = e.questions[index];
                  return ListTile(
                    leading: Image.asset(
                        'assets/flags/${country.imageName}.gif',
                        width: 40),
                    title: Text(country.name),
                    subtitle: Text('首都：${country.capitalCity}'),
                  );
                },
              );
            }).toList(),
          )),
        ],
      ),
    );
  }
}

class _KeyBoard extends StatelessWidget {
  const _KeyBoard({
    required this.answer,
    required this.value,
    required this.onTap,
  });

  final String answer;
  final String value;
  final ValueChanged<String> onTap;

  @override
  Widget build(BuildContext context) {
    if (value.length >= answer.length) {
      return const SizedBox.shrink();
    }

    final next = answer[value.length];
    List<String> options = List.from(_allowedChars);
    options.shuffle();
    options.remove(next);
    options = options.take(3).toList()
      ..add(next)
      ..shuffle();

    return Wrap(
      alignment: WrapAlignment.center,
      spacing: 8,
      runSpacing: 8,
      children: options.map((option) {
        return SizedBox(
          width: 64,
          height: 64,
          child: ElevatedButton(
            onPressed: () => onTap(option),
            child: Text(
              option,
              style: const TextStyle(fontSize: 24),
            ),
          ),
        );
      }).toList(),
    );
  }
}

List<String> get _allowedChars => <String>[
      'あ',
      'い',
      'う',
      'え',
      'お',
      'か',
      'き',
      'く',
      'け',
      'こ',
      'さ',
      'し',
      'す',
      'せ',
      'そ',
      'た',
      'ち',
      'つ',
      'て',
      'と',
      'な',
      'に',
      'ぬ',
      'ね',
      'の',
      'は',
      'ひ',
      'ふ',
      'へ',
      'ほ',
      'ま',
      'み',
      'む',
      'め',
      'も',
      'や',
      'ゆ',
      'よ',
      'ら',
      'り',
      'る',
      'れ',
      'ろ',
      'わ',
      'を',
      'ん',
      'が',
      'ぎ',
      'ぐ',
      'げ',
      'ご',
      'ざ',
      'じ',
      'ず',
      'ぜ',
      'ぞ',
      'だ',
      'ぢ',
      'づ',
      'で',
      'ど',
      'ば',
      'び',
      'ぶ',
      'べ',
      'ぼ',
      'ぱ',
      'ぴ',
      'ぷ',
      'ぺ',
      'ぽ',
      'ぁ',
      'ぃ',
      'ぅ',
      'ぇ',
      'ぉ',
      'ゃ',
      'ゅ',
      'ょ',
      'っ',
      'ー',
    ];
