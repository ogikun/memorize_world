import 'package:flutter/material.dart';
import 'package:memorize_world/question_page.dart';

import 'models.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
        itemCount: Area.values.length,
        itemBuilder: (context, index) {
          final area = Area.values[index];
          final buttons = [
            (
              label: '国名',
              page: QuestionPage.countryName(area),
            ),
            (
              label: '首都',
              page: QuestionPage.capitalCity(area),
            ),
          ];

          return ListTile(
            title: Text(area.name),
            subtitle: Text('国の数: ${area.countries.length}'),
            trailing: Row(
              mainAxisSize: MainAxisSize.min,
              children: buttons.map((button) {
                return Padding(
                  padding: const EdgeInsets.only(left: 8.0),
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => button.page,
                        ),
                      );
                    },
                    child: Text(button.label),
                  ),
                );
              }).toList(),
            ),
          );
        },
      ),
    );
  }
}
