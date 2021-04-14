const list = document.getElementById("list")
async function repositories(userName){   
    try{
        let response = await fetch(`https://api.github.com/search/repositories?q=user:${userName}`)
        let data = await response.json()
        console.log(data)
        let nameLI = document.createElement("li")
        nameLI.innerHTML = `${userName}'s repositories:`
        list.append(nameLI)
        let innerUL = document.createElement("ul")
        nameLI.append(innerUL) 
        console.log(nameLI)       
        await data.items.forEach(element => {  
            let repoName = document.createElement("li")           
            repoName.innerHTML = ` <a href="${element.url}">${element.name}</a>`
            innerUL.append(repoName)            
        });
    }catch(error){
        console.log(error)
    }
}

Promise.all([repositories("shpomp"), repositories("islam-fawzy25"), repositories("Saidemm")])