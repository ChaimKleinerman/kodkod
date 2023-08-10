
window.addEventListener('load', () => {
    

    createElements = () => {
        const body = document.body
        const div = document.getElementById('container');
        const table = document.createElement('table');
        div.append(table);


        function myStyle(table, div, body) {
            body.style.backgroundColor = 'aqua';
            div.style.backgroundColor = 'blue';
            div.style.height = '450px'

            table.style.border = 'solid'
            table.style.width = '400px'
            table.style.height = '400px'
        }
        myStyle(table, div, body)

        function createTable(table) {
            const array = [] 
            let shape = 'x';
            let count = 0
            for (let num1 = 0; num1 < 3; num1++) {
                const row = table.insertRow(num1);

                row.style.display = 'flex';
                row.style.flexDirection = 'row';
                row.style.width = '100%';
                row.style.height = '33%';


                for (let num2 = 0; num2 < 3; num2++) {
                    count++

                    const coll = row.insertCell(num2);
                    
                    coll.append(num1,num2)
                    array.push(num1,num2)


                    collStyle = (coll) => {
                        coll.style.width = '90%';
                        coll.style.height = '98%';
                        coll.style.display = 'flex';
                        coll.style.justifyContent = 'center';
                        coll.style.alignItems = 'center';
                        coll.style.border = 'solid';



                    }
                    collStyle(coll);

                    
                    coll.addEventListener('click', () => {
                        shape = ticTachTow()
                    })

                    function ticTachTow(){
                    let element = coll.textContent
                    coll.textContent = shape;
                        shape = shape === 'x'? 'o' : 'x';
                        
                        console.log(element);
                        let index =  array.indexOf([element])
                        console.log(index);
                        array.splice(index,0,shape)
                        console.log(array);
                        return shape;
                    }

                   

                }
            }
            
        }
        createTable(table)
    }
    createElements()
    

})





















