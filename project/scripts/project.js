

// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//get the last modified date
const lastmodifieddate = document.lastModified
document.getElementById("lastmodified").textContent = ("Last modified " + lastmodifieddate);


// hamburger button for menu in mobile size
const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});


//Object array for rocks

const rocks = [
    {
        name: "Agate",
        image: "images/Agate.jpg"

    },
    {
        name: "Jasper",
        image: "images/Jasper.jpg"
    },
    {
        name: "Rose Quartz",
        image: "images/rose-quartz-mineral.jpg"
    },
    {
        name: "Granite",
        image: "images/granite.jpg"
    },
    {
        name: "Amethyst",
        image: "images/amethyst.jpg"
    },
    {
        name: "Garnet",
        image: "images/garnet.jpg"
    },


]

function rockTemplate(rock) {
    return `<table>
    <tr><td>Name: ${rock.name} </td></tr>
    <tr><td><img loading="lazy" src=${rock.image} alt=${rock.name}></td></tr>
    
  </table>`;

}

function renderRocks(rock) {
    const html = rock.map(rockTemplate);
    document.getElementById("rock-list").innerHTML = html.join("");
};

renderRocks(rocks)




