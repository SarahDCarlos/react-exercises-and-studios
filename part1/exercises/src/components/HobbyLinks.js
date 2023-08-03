

export default function HobbyLinks () {
    let hobbyLinks = ["https://tasty.co/", "https://store.steampowered.com/"]
    return (
       <div>
          <h3>Hobbies</h3>
          
             <a href = {hobbyLinks[0]}>Cooking</a><br />
             <a href = {hobbyLinks[1]}>Video Games</a>
       </div>
    );
   }