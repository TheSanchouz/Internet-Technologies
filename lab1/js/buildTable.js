let arr = [{ attribute: "align", value: "left | center | right", description: "Определяет выравнивание таблицы" },
{ attribute: "background", value: "URL", description: "Задает фоновый рисунок в таблице" },
{ attribute: "bgcolor", value: "#RRGGBB", description: "Цвет фона таблицы" },
{ attribute: "border", value: "n", description: "Толщина рамки в пикселах" },
{ attribute: "bordercolor", value: "#RRGGBB", description: "Цвет рамки" },
{ attribute: "cellpadding", value: "px | %", description: "Отступ от рамки до содержимого ячейки" },
{ attribute: "cellspacing", value: "n", description: "Расстояние между ячейками" },
{ attribute: "cols", value: "n", description: "Число колонок в таблице" },
{ attribute: "frame", value: "void | border | above | below | hsides | vsides | rhs | lhs", description: "Сообщает браузеру, как отображать границы вокруг таблицы" },
{ attribute: "height", value: "px | %", description: "Высота таблицы" },
{ attribute: "rules", value: "all | groups | cols | none | rows", description: "Сообщает браузеру, где отображать границы между ячейками" },
{ attribute: "summary", value: "any text", description: "Краткое описание таблицы" },
{ attribute: "width", value: "px | %", description: "Ширина таблицы" }]

buildTable(arr);

function buildTable(arr) {
    let keys = Object.keys(arr[0]);

    let body = document.querySelector("body");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let trhead = document.createElement("tr");

    for (let i = 0; i < keys.length; i++) {
        let th = document.createElement("th");
        let text = document.createTextNode(keys[i]);

        th.appendChild(text);
        trhead.appendChild(th);
    }
    thead.appendChild(trhead);

    for (let i = 0; i < arr.length; i++) {
        let trbody = document.createElement("tr");
        let values = Object.values(arr[i]);
        for (let j = 0; j < keys.length; j++) {
            let td = document.createElement("td");
            let value = document.createTextNode(values[j]);

            td.appendChild(value);
            trbody.appendChild(td);
        }

        tbody.appendChild(trbody);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    body.appendChild(table);

    table.setAttribute("border", "1");
    table.setAttribute("border", "1");
}