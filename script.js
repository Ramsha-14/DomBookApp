const loginData=JSON.parse(localStorage,getItem('loginData'));
if(!loginData || loginData.email !=='admin@empher.com'){
    alert('Admin not logged In');
    window.location.href='index.html';
}
const addBookForm=document.getElementById('addBookForm');
const bookGrid=document.getElementById('bookGrid');
async function fetchBooks(){
    try{
        const response = await fetch('http://localhost:3000/books');
        const books=await response.json();
        displayBooks(books);
    }catch(error){
        console.error('Error fetching:',error);
    }
}
function displayBooks(books){
    bookGrid.innerHTML='';
    books.forEach=>{
        const bookCard=document.createElement("div");
        bookCard.classList.add('book-card');
        bookCard.innerHTML=`
        <h2>${book.title}</h2>
        <p>Author:${book.author}</p>
        <p>Category:${book.category}</p>
        <p>Availiability Status:${book.isAvailiable ? 'Availiable' : 'Borrowed'}</p>
        <p>Borrowed Days:${book.borrowedDays || 0}</p>
        
        `
    }
}
