import './MainPage.scss';

export class MainPage {
    constructor(){
        const getData = '';
    }
    Main(){
        this.AddNote();
        dataStructure.map(v => {
            this.NoteBox(v.tittle, v.content, v.color ,v.archived, v.favourite);
        })
        
    }
    AddNote(){
        const container: HTMLElement = document.createElement("div");
        const inputTittle: HTMLInputElement = document.createElement("input");
        const inputContent: HTMLTextAreaElement = document.createElement("textarea");
        const colorPicker: HTMLInputElement = document.createElement("input");
        const inputConfirm: HTMLButtonElement = document.createElement("button");

        let dataTab:any  = [];

        colorPicker.type = "radio";

        container.className = "addNote";
        inputTittle.className = "inputTittle";
        inputContent.className = "inputContent";
        colorPicker.className = "colorPicker";
        inputConfirm.className = "inputConfirm";

        container.id = "addNote";
        inputTittle.id = "inputTittle";
        inputContent.id = "inputContent";
        colorPicker.id = "colorPicker";
        inputConfirm.id = "inputConfirm";

        inputTittle.placeholder = "Create Tittle here..";
        inputContent.placeholder = "Create note here..";


        document.getElementById('globalAddNote').appendChild(container);   
        container.appendChild(inputTittle);   
        container.appendChild(inputContent);   
        container.appendChild(colorPicker);     
        container.appendChild(inputConfirm);   

        inputConfirm.addEventListener("click",function(){
            dataStructure.push(
                {
                    id: 1,
                    tittle: inputTittle.value,
                    content: inputContent.value,
                    color: 'purple',
                    archived: false,
                    favourite: false,
                    creationDate: '21-01-2020',
                }
            )
            console.log(dataStructure)
        })
    }
    NoteBox(tittle: string, contentTxt: string, color: any, archived: boolean, favourite: boolean){
        const container: HTMLElement = document.createElement("div");
        const titleTools: HTMLElement = document.createElement("div");
        const content: HTMLElement = document.createElement("div");

        container.className = "noteBox";
        titleTools.className = "titleTools";
        content.className = "noteBoxContent";

        container.id = "container";
        titleTools.id = "titleTools";
        content.id = "content";

        container.style.backgroundColor = color;
        container.style.borderColor = color;

        titleTools.innerHTML = tittle;
        content.innerHTML = contentTxt;

        document.getElementById('globalNotes').appendChild(container);  
        container.appendChild(titleTools);
        container.appendChild(content);
    }
}

const dataStructure = [
    {
        id: 1,
        tittle: 'Tytuł',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when a',
        color: 'red',
        archived: false,
        favourite: false,
        creationDate: '21-01-2020',
    },
    {
        id: 2,
        tittle: 'Zakupy',
        content: 'Mleko, Pomidory, woda',
        color: 'yellow',
        archived: false,
        favourite: false,
        creationDate: '21-01-2020',
    },
    {
        id: 3,
        tittle: 'Rachunki',
        content: 'Prąd, Internet',
        color: 'green',
        archived: false,
        favourite: false,
        creationDate: '21-01-2020',
    },
    {
        id: 4,
        tittle: 'Plany',
        content: 'Dom, Ferrari',
        color: 'grey',
        archived: false,
        favourite: false,
        creationDate: '21-01-2020',
    },
    {
        id: 5,
        tittle: 'Drzewa',
        content: 'Dąb, Lipa',
        color: 'lightgreen',
        archived: false,
        favourite: false,
        creationDate: '21-01-2020',
    },
]