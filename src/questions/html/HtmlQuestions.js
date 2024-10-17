import { v1 } from 'uuid';

export const htmlQuestions = [
    {
        id: v1(),
        question: "Какое значение нужно указать в атрибуте target, чтобы ссылка открывалась в новой вкладке?",
        options: [
            {
                id: v1(),
                answer: "_self",
                isRight: false,
            },
            {
                id: v1(),
                answer: "_blank",
                isRight: true,
            },
            {
                id: v1(),
                answer: "_parent",
                isRight: false,
            },
            {
                id: v1(),
                answer: "_top",
                isRight: false,
            },
        ],
        answerDescription: "https://www.w3schools.com/tags/att_a_target.asp",
    },
    {
        id: v1(),
        question: "Выбери элемент, который может быть прямым дочерним элементом для <tbody>?",
        options: [
            {
                id: v1(),
                answer: "<tr>",
                isRight: true,
            },
            {
                id: v1(),
                answer: "<table>",
                isRight: false,
            },
            {
                id: v1(),
                answer: "<td>",
                isRight: false,
            },
            {
                id: v1(),
                answer: "<thead>",
                isRight: false,
            },
        ],
        answerDescription: "https://www.w3schools.com/tags/tag_tbody.asp",
    },
    {
        id: v1(),
        question: "Какой HTML-код невалиден?",
        options: [
            {
                id: v1(),
                answer: "<img src='https://example.com/picture.jpg'>",
                isRight: true,
            },
            {
                id: v1(),
                answer: "<ul> <li><a href='#'>1</a></li> </ul>",
                isRight: false,
            },
            {
                id: v1(),
                answer: "<ol> <li><ul> <li>1</li> </ul></li> </ol>",
                isRight: false,
            },
            {
                id: v1(),
                answer: "<img src='https://example.com/picture.jpg' alt='alt text'>",
                isRight: false,
            },
        ],
        answerDescription: "https://www.w3schools.com/tags/att_img_alt.asp",
    },
    {
        id: v1(),
        question: "Атрибут action тега form опрелеляет:",
        options: [
            {
                id: v1(),
                answer: "Способ отправки данных формы.",
                isRight: false,
            },
            {
                id: v1(),
                answer: "Уникальное имя формы",
                isRight: false,
            },
            {
                id: v1(),
                answer: "Способ кодирования данных формы",
                isRight: false,
            },
            {
                id: v1(),
                answer: "URL, куда отправляются данные формы",
                isRight: true,
            },
        ],
        answerDescription: "https://www.w3schools.com/tags/att_form_action.asp",
    },
    {
        id: v1(),
        question: "Тег <body> в HTML-документе следует за тегом:",
        options: [
            {
                id: v1(),
                answer: "<html>",
                isRight: false,
            },
            {
                id: v1(),
                answer: "<head>",
                isRight: true,
            },
            {
                id: v1(),
                answer: "<title>",
                isRight: false,
            },
            {
                id: v1(),
                answer: "<!DOCTYPE html>",
                isRight: false,
            },
        ],
        answerDescription: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/body",
    },
];
