

// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//get the last modified date
const lastmodifieddate = document.lastModified
document.getElementById("lastmodified").textContent = ("Last modified " + lastmodifieddate);

//Object array for rocks

const rocks = [
    {
        name: "agate",
        image: "images/Agate.jpg"

    },
    {
        name: "jasper",
        image: ""
    },
    {
        name: "quartz",
        image: ""
    },
    {
        name: "granite",
        image: ""
    },
    {
        name: "amethyst",
        image: "images/amethyst.jpg"
    },
    {
        name: "garnet",
        image: "images/garnet.jpg"
    },


]

function rockTemplate(rock) {
    return `<table>
    <tr><td>Name: ${rock.name} </td></tr>
    <tr><td><img loading="lazy" src=${rock.image} alt=${rock.name} width=100 height=auto></td></tr>
    
  </table>`;

}

function renderRocks(rock) {
    const html = rock.map(rockTemplate);
    document.getElementById("rock-list").innerHTML = html.join("");
};

renderRocks(rocks)




