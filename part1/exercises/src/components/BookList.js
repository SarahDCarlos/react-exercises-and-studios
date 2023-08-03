export default function BookList() {
   let pageTitle = "Books I read this month";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgT-y-Z25ZrdGvEs74qEMZB95kmp47QyQDOQ&usqp=CAU";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoSE7za7kfI5uzOKC-v5QejN9WphFyzuaWA&usqp=CAU";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A3xCseznHJGCkRHExU12FqW3OWpuQxDMUQ&usqp=CAU";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Bloody Winter" />
         <img src={book2} alt="One Small Death" />
         <img src={book3} alt="Sweet Home!" />
      </div>      
   );
}