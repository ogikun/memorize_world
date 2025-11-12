import 'dart:math';

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
  List<({Country country, bool isCorrect})> solvedCountries = [];

  List<Country> get correctQuestions =>
      solvedCountries.where((e) => e.isCorrect).map((e) => e.country).toList();
  List<Country> get gaveUpQuestions =>
      solvedCountries.where((e) => !e.isCorrect).map((e) => e.country).toList();

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
      appBar: AppBar(
          title: Row(
        children: [
          Expanded(child: Text('${widget.area.name} - $title')),
          Text(
              '${min(widget.area.countries.length - remainingCountries.length + 1, widget.area.countries.length)} / ${widget.area.countries.length}'),
        ],
      )),
      body: remainingCountries.isEmpty
          ? _ResultView(
              correctQuestions: correctQuestions,
              gaveUpQuestions: gaveUpQuestions,
            )
          : _QuestionView(
              country: remainingCountries.first,
              solvedCountries: solvedCountries,
              questionType: widget._questionType,
              onAnswered: (isCorrect) {
                setState(() {
                  final country = remainingCountries.removeAt(0);
                  solvedCountries.add((country: country, isCorrect: isCorrect));
                });
              },
            ),
    );
  }
}

class _QuestionView extends StatefulWidget {
  const _QuestionView({
    required this.country,
    required this.solvedCountries,
    required this.questionType,
    required this.onAnswered,
  });

  final List<({Country country, bool isCorrect})> solvedCountries;
  final Country country;
  final _QuestionType questionType;
  final ValueChanged<bool> onAnswered;

  @override
  State<_QuestionView> createState() => _QuestionViewState();
}

class _QuestionViewState extends State<_QuestionView> {
  final key = GlobalKey<FormFieldState<String>>();
  final scrollController = ScrollController();
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

  void jumpToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      scrollController.animateTo(scrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 100), curve: Curves.easeIn);
    });
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
    jumpToBottom();
    final newValue = input + value;
    if (newValue.length > answer.length) {
      return;
    }
    final answerChar = answer.substring(input.length, newValue.length);
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

  void submitAnswer() async {
    hintCount = 0;
    widget.onAnswered(true);
    input = '';
  }

  void requestHint() {
    jumpToBottom();
    setState(() {
      hintCount++;
    });
    jumpToBottom();
  }

  void giveUp() {
    jumpToBottom();
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
            controller: scrollController,
            padding: const EdgeInsets.all(24),
            children: [
              for (final previous in widget.solvedCountries)
                Padding(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: _Card(
                    questionType: widget.questionType,
                    country: previous.country,
                    giveUp: () {},
                    requestHint: () {},
                    hint: hint,
                    hintCount: hintCount,
                    isCorrect: previous.isCorrect,
                  ),
                ),
              _Card(
                questionType: widget.questionType,
                country: widget.country,
                giveUp: giveUp,
                requestHint: requestHint,
                hint: hint,
                hintCount: hintCount,
                isCorrect: null,
              )
            ],
          ),
        ),
        Material(
          elevation: 16,
          color: Colors.white,
          shape: const RoundedRectangleBorder(
              borderRadius: BorderRadius.vertical(top: Radius.circular(16))),
          child: SafeArea(
            child: Padding(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                children: [
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
                  _KeyBoard(
                    answer: answer,
                    value: input,
                    onTap: onTapKeyboard,
                    activateShorthands:
                        widget.questionType == _QuestionType.countryName,
                  ),
                ],
              ),
            ),
          ),
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

class _Card extends StatelessWidget {
  const _Card({
    required this.questionType,
    required this.country,
    required this.giveUp,
    required this.requestHint,
    required this.hint,
    required this.hintCount,
    required this.isCorrect,
  });

  final _QuestionType questionType;
  final Country country;
  final VoidCallback giveUp;
  final VoidCallback requestHint;
  final String hint;
  final int hintCount;
  final bool? isCorrect;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: ShapeDecoration(
          shape: const RoundedRectangleBorder(
              borderRadius: BorderRadius.all(Radius.circular(24))),
          color: isCorrect != null
              ? isCorrect!
                  ? Colors.green.shade50
                  : Colors.red.shade50
              : Colors.white),
      child: Column(
        children: [
          Center(
            child: Text(
              questionType == _QuestionType.countryName
                  ? 'この国の名前は？'
                  : 'この国の首都は？',
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
          ),
          const Center(child: SizedBox(height: 16)),
          Image.asset(
            'assets/flags/${country.imageName}.gif',
            height: 160,
          ),
          const SizedBox(height: 8),
          Center(
            child: Text(
              questionType == _QuestionType.countryName
                  ? '首都：${country.capitalCity}'
                  : country.name,
            ),
          ),
          const SizedBox(height: 16),
          Center(
            child: Builder(
              builder: (context) {
                String display = '';
                if (isCorrect != null) {
                  display = questionType == _QuestionType.countryName
                      ? country.name
                      : country.capitalCity;
                } else {
                  for (int i = 0; i < hint.length; i++) {
                    if (i < hintCount) {
                      display += hint[i];
                    } else {
                      display += '＿';
                    }
                  }
                }
                return Text(
                  display,
                  style: const TextStyle(fontSize: 32),
                );
              },
            ),
          ),
          if (isCorrect == null) ...[
            const SizedBox(
              height: 16,
            ),
            Row(
              children: [
                Expanded(
                  child: TextButton(
                      onPressed: requestHint, child: const Text('ヒント')),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: OutlinedButton(
                    onPressed: giveUp,
                    child: const Text('あきらめる'),
                  ),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}

class _KeyBoard extends StatelessWidget {
  const _KeyBoard(
      {required this.answer,
      required this.value,
      required this.onTap,
      required this.activateShorthands});

  final String answer;
  final String value;
  final ValueChanged<String> onTap;
  final bool activateShorthands;

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

    return Column(
      children: [
        if (activateShorthands) ...[
          Wrap(
              spacing: 8,
              runSpacing: 8,
              children: shorthands
                  .map((e) => ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.white,
                        shape: const RoundedRectangleBorder(),
                        padding: const EdgeInsets.all(16),
                      ),
                      onPressed: () {
                        onTap(e.value);
                      },
                      child: Column(
                        children: [
                          Text(
                            e.value,
                            style: const TextStyle(fontSize: 10, height: 0.5),
                          ),
                          Text(e.label),
                        ],
                      )))
                  .toList()),
          const SizedBox(
            height: 16,
          ),
        ],
        Wrap(
          alignment: WrapAlignment.center,
          spacing: 8,
          runSpacing: 8,
          children: options.map((option) {
            return SizedBox(
              width: 64,
              height: 64,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.white,
                    padding: EdgeInsets.zero,
                    shape: const RoundedRectangleBorder()),
                onPressed: () => onTap(option),
                child: Center(
                  child: Text(
                    option,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 24),
                  ),
                ),
              ),
            );
          }).toList(),
        ),
      ],
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

const shorthands = [
  (label: '国', value: 'こく'),
  (label: '連邦', value: 'れんぽう'),
  (label: '王国', value: 'おうこく'),
  (label: '共和国', value: 'きょうわこく'),
];
