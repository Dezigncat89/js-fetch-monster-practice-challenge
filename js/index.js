//Create a Monster
POST http://localhost:3000/monsters
headers: 
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

data:
{ name: string, age: number, description: string }
<button class="data-btn" id="[monster_id]"> Post Monster<3</button>

//Fetch Request to Render
async function getMonsters() {
    let url = 'monsters.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderMonsters() {
    let Monsters = await getMonsters();
    let html = '';
    Monsters.forEach(monster => {
        let htmlSegment = `<div class="card">
    <h2>${card.name}</h2>
    <h3>${card.age}</h3>
    <p>${card.description}</p>
  </div> 
    </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderMonsters();
