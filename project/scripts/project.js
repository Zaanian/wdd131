// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//get the last modified date
const lastmodifieddate = document.lastModified
document.getElementById("lastmodified").textContent = ("Last modified " + lastmodifieddate)


//Object array for rocks

const rocks = [
    {
        name: "agate",
        type: "",
        image: ""

    },
    {
        name: "jasper",
        type: "",
        image: ""
    },
    {
        name: "quartz",
        type: "",
        image: ""
    },
    {
        name: "granite",
        type: "",
        image: ""
    },
    {
        name: "amethyst",
        type: "",
        image: ""
    },
    {
        name: "garnet",
        type: "",
        image: ""
    },
    

]

function rockTemplate(rock) {
    return `<table>
    <tr><td>Name: ${rock.name} </td></tr>
    <tr><td>Location: ${rock.type} </td></tr>
    <tr><td><img src=${rock.image} alt=${rock.name}></td></tr>
    
  </table>`;

}

function renderRocks(rock) {
    const html = rock.map(rockTemplate);
    document.querySelector("main").innerHTML = html.join("");
};