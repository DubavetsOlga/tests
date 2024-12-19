import { v1 } from "uuid"
import { QuestionType } from "../../app/Main"

export const cssQuestions: QuestionType[] = [
    {
        id: v1(),
        question: "Какая CSS-функция используется для вставки пользовательских свойств (custom property)?",
        options: [
            {
                id: v1(),
                answer: "calc()",
                isRight: false,
            },
            {
                id: v1(),
                answer: "var()",
                isRight: true,
            },
            {
                id: v1(),
                answer: "attr()",
                isRight: false,
            },
            {
                id: v1(),
                answer: "hsl()",
                isRight: false,
            },
        ],
        answerDescription: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
        type: "oneAnswer",
    },
    {
        id: v1(),
        question:
            "Выбери значение, которое необходимо указать text-align, чтобы текст растянулся по всей ширине контейнера, увеличив пробелы между словами",
        options: [
            {
                id: v1(),
                answer: "text-align: center",
                isRight: false,
            },
            {
                id: v1(),
                answer: "text-align: justify",
                isRight: true,
            },
            {
                id: v1(),
                answer: "text-align: inherit",
                isRight: false,
            },
            {
                id: v1(),
                answer: "text-align: auto",
                isRight: false,
            },
        ],
        answerDescription: "https://www.w3schools.com/cssref/pr_text_text-align.php",
        type: "oneAnswer",
    },
    {
        id: v1(),
        question: "Тень блока при использовании box-shadow: 0 10px black будет находиться:",
        options: [
            {
                id: v1(),
                answer: "сверху, сразу над блоком",
                isRight: false,
            },
            {
                id: v1(),
                answer: "справа",
                isRight: false,
            },
            {
                id: v1(),
                answer: "внизу, сразу под блоком",
                isRight: true,
            },
            {
                id: v1(),
                answer: "слева",
                isRight: false,
            },
        ],
        answerDescription: "https://www.w3schools.com/cssref/css3_pr_box-shadow.php",
        type: "oneAnswer",
    },
    {
        id: v1(),
        question: "Какое значение не может принимать свойство position?",
        options: [
            {
                id: v1(),
                answer: "static",
                isRight: false,
            },
            {
                id: v1(),
                answer: "relative",
                isRight: false,
            },
            {
                id: v1(),
                answer: "block",
                isRight: true,
            },
            {
                id: v1(),
                answer: "absolute",
                isRight: false,
            },
        ],
        answerDescription: "https://www.w3schools.com/css/css_positioning.asp",
        type: "oneAnswer",
    },
    {
        id: v1(),
        question:
            "Выберите свойство CSS, которое указывает, как будут расположены строки текста(горизонтально или вертикально).",
        options: [
            {
                id: v1(),
                answer: "text-justify",
                isRight: false,
            },
            {
                id: v1(),
                answer: "text-overflow",
                isRight: false,
            },
            {
                id: v1(),
                answer: "writing-mode",
                isRight: true,
            },
            {
                id: v1(),
                answer: "word-wrap",
                isRight: false,
            },
        ],
        answerDescription: "https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode",
        type: "oneAnswer",
    },
    {
        id: v1(),
        question: "Какие из перечисленных CSS-свойств можно анимировать?",
        options: [
            {
                id: v1(),
                answer: "display",
                isRight: false,
            },
            {
                id: v1(),
                answer: "font-size",
                isRight: true,
            },
            {
                id: v1(),
                answer: "opacity",
                isRight: true,
            },
            {
                id: v1(),
                answer: "margin",
                isRight: true,
            },
        ],
        answerDescription: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties",
        type: "severalAnswers",
    },
]
