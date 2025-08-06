//your JS code here. If required.
function fun1(event){
        event.preventDefault();

        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let isbn = document.querySelector("#isbn").value;

        let tr = document.createElement("tr");

        let td_title = document.createElement("td");
        td_title.innerHTML = title;
        let td_author = document.createElement("td");
        td_author.innerHTML = author;
        let td_isbn = document.createElement("td");
        td_isbn.innerHTML = isbn;

        let td_delete = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete";
        deleteBtn.onclick = function() {
            tr.remove();
        };
        td_delete.appendChild(deleteBtn);

        tr.appendChild(td_title);
        tr.appendChild(td_author);
        tr.appendChild(td_isbn);
        tr.appendChild(td_delete);

        document.getElementById("book-list").appendChild(tr);

        document.querySelector("form").reset();
    }