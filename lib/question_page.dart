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
  final _formFieldKey = GlobalKey<FormFieldState>();
  int hintCount = 0;

  void submitAnswer() {
    if (_formFieldKey.currentState?.validate() ?? false) {
      hintCount = 0;
      widget.onAnswered(true);
    }
    _formFieldKey.currentState?.didChange('');
  }

  @override
  Widget build(BuildContext context) {
    final answer = widget.questionType == _QuestionType.countryName
        ? widget.country.name
        : widget.country.capitalCity;

    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          widget.questionType == _QuestionType.countryName
              ? 'この国の名前は？'
              : 'この国の首都は？',
        ),
        const SizedBox(height: 8),
        Image.asset(
          'assets/flags/${widget.country.imageName}.gif',
          height: 80,
        ),
        const SizedBox(height: 8),
        Text(
          widget.questionType == _QuestionType.countryName
              ? '首都：${widget.country.capitalCity}'
              : widget.country.name,
        ),
        const SizedBox(height: 16),
        const Text('答え'),
        Builder(
          builder: (context) {
            String display = '';
            for (int i = 0; i < answer.length; i++) {
              if (i < hintCount) {
                display += answer[i];
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
        TextButton(
            onPressed: () {
              setState(() {
                hintCount++;
              });
            },
            child: const Text('ヒント')),
        const SizedBox(height: 32),
        TextFormField(
          key: _formFieldKey,
          decoration: const InputDecoration(
            border: OutlineInputBorder(),
          ),
          autofocus: true,
          onFieldSubmitted: (_) {
            submitAnswer();
          },
          validator: (value) {
            if (value == null || value.isEmpty) {
              return '回答を入力してください';
            }
            if (value != answer) {
              return '不正解です';
            }
            return null;
          },
        ),
        const SizedBox(height: 16),
        Row(
          children: [
            Expanded(
                child: OutlinedButton(
                    onPressed: () {
                      widget.onAnswered(false);
                    },
                    child: const Text('あきらめる'))),
            const SizedBox(width: 8),
            Expanded(
              child: FilledButton(
                onPressed: submitAnswer,
                child: const Text('回答する'),
              ),
            ),
          ],
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
