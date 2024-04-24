const myLibrary = [];

function Book(author, title, numberOfPages, read) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function addBookToLibrary(author, title, numberOfPages) {
  const aBook = Object.create(Book(author, title, numberOfPages));
  myLibrary.push(aBook);
}

function displayLibrary(){
    for(let i=0; i < myLibrary.length(); i++){
        const div = document.createElement("div");
        div.id = "book" + i;
        div.className = "card";
        document.getElementById("article").appendChild(div);  

        const bookTitle = document.createTextNode(myLibrary[i].title);
        document.getElementById(div.id).appendChild(bookTitle);

        const br = document.createElement('br');
        document.getElementById(div.id).appendChild(br.cloneNode());

        const bookAuthor = document.createTextNode(myLibrary[i].author);
        document.getElementById(div.id).appendChild(bookAuthor);

        const bookPages = document.createTextNode(myLibrary[i].numberOfPages);
        document.getElementById(div.id).appendChild(bookPages);

        const bookRead = document.createTextNode(myLibrary[i].read);
        document.getElementById(div.id).appendChild(bookRead);
    }
}

function addBookListner() {
    const addBookModalId = document.getElementById("addBookButton");
    addBookModalId.addEventListener('click', addBookModal);
}

function addBookModal() {
    // Get the modal
    var modal = document.getElementById("addBookModal");

    // open the modal
    modal.style.display = "block";

    // Create container for form
    let new_div = document.createElement('div');
    let newClass ='sort-container';
    new_div.className = newClass;
    new_div.id = 'sortContainer';
    document.getElementById('sort-modal-content').appendChild(new_div);

    //Create a container for the form section header
    let sort_header_div = document.createElement('div');
    let sort_header_class ='sort-header-container';
    sort_header_div.className = sort_header_class;
    sort_header_div.id = 'sort-header-container';
    document.getElementById('sortContainer').appendChild(sort_header_div);   

    //Create title for the form
    let new_header = document.createElement('h3');
    let headerClass = 'formHeader';
    new_header.className = headerClass;
    document.getElementById('sort-header-container').appendChild(new_header);

    //Populate and append the form title. 
    headerString = 'Sort jobs: '; 
    new_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    document.getElementById('sortContainer').appendChild(br.cloneNode());

    //Create a container for the form elements
    let list_feild_div = document.createElement('div');
    let list_feild_class ='feild_div';
    list_feild_div.className = list_feild_class;
    list_feild_div.id = 'list_feild_div';
    document.getElementById('sortContainer').appendChild(list_feild_div); 

    var valueList = ['Work Order', 'Die Number', 'Customer', 'Order Number', 'Start Date', 'End Date', 'On Time']

    var selectList = document.createElement("select");
    selectList.id = "componentSelect";
    document.getElementById('list_feild_div').appendChild(selectList);

    for (var i = 0; i < valueList.length; i++) {
        var option = document.createElement("option");
        option.value = valueList[i];
        option.text = valueList[i];
        selectList.appendChild(option);
    }

    document.getElementById('sortContainer').appendChild(br.cloneNode());
    let listSearchActionButton = document.createElement('button');
    listSearchActionButton.appendChild(document.createTextNode('Submit'));
    listSearchActionButton.addEventListener('click', function() {insertDeptToDoElements(document.getElementById('deptSelect').value, document.getElementById('componentSelect').value)});
    document.getElementById('list_feild_div').appendChild(listSearchActionButton);

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        const el = document.getElementById('sortContainer');
        while(el.firstChild) el.removeChild(el.firstChild);
        modal.style.display = "none";
    }
    } 
}
