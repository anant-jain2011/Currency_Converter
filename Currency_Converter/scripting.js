const getData = async () => {

    const create = (elem) => {
        return document.createElement(elem)
    }

    let br = create("br");
    let br2 = create("br");
    let br3 = create("br");

    let p = create("p");
    p.innerHTML = "The result will  <br>    <br>     be shown here";

    let li1 = create("p");
    li1.innerHTML = "From:";

    let li2 = create("p");
    li2.innerHTML = "To:";

    let li3 = create("p");
    li3.innerHTML = "Amount:";

    let select = create("select");
    select.classList.add("from");

    let swapImg = create("img");
    swapImg.src = "https://icon-library.com/images/swap-icon/swap-icon-23.jpg";
    swapImg.classList.add("swap2");
    swapImg.draggable = false;
    swapImg.alt= "Swap button image"
    swapImg.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        return false;
    }, false);

    let swapBtn = create("button");
    swapBtn.classList.add("swap");
    swapBtn.append(swapImg);

    let select2 = create("select");
    select2.classList.add("to");

    let amt = create("input");
    amt.placeholder = "Enter Amount here:-";
    amt.type = "number";
    amt.value = 1;


    const displayItems = (data, data2) => {
        for (let i = 0; i < data.length; i++) {
            let option = create("option");
            option.innerHTML = data[i] + ': ' + data2[i];
            option.value = data[i]

            let option2 = create("option");
            option2.innerHTML = data[i] + ': ' + data2[i];
            option2.value = data[i]

            select.appendChild(option);
            select2.appendChild(option2);
        }
    }
    const swap = () => {
        let temp = select.value;
        select.value = select2.value;
        select2.value = temp;
        displayResult();
    }

    let fetch2 = await fetch("https://api.frankfurter.app/currencies")
        .then(response => response.json())
        .then(data => displayItems(Object.keys(data), Object.values(data)))
        .catch(error => console.log(error));

    async function displayResult(dataf) {
        let from = select.value;
        let to = select2.value;
        let amount = amt.value;

        fetch('https://api.exchangerate-api.com/v4/latest/' + from)
            .then(response => {
                return response.json();
            }).then(data => {
                p.innerHTML = `Result is ${(data.rates[to]) * amount}`;
            })
    }
    select.onchange = displayResult;
    select2.onchange = displayResult;
    amt.onkeyup = displayResult;
    swapBtn.onclick = swap;

    amt.classList.add("amount")

    p.classList.add("result");

    li1.classList.add("list");
    li2.classList.add("list");
    li3.classList.add("list");

    document.body.append(li1);
    document.body.append(select);

    document.body.append(br3);

    document.body.append(swapBtn);

    document.body.append(li2);
    document.body.append(select2);

    document.body.append(li3);
    document.body.append(amt);

    document.body.append(br);
    document.body.append(br2);

    document.body.append(p);
}
getData();
