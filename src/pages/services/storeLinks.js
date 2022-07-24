//fetch saved links
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

//save a link to local storage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    //check if the link is already stored
    const hasLink = linksStored.some(link => link.id === newLink.id);

    //if the link is already stored, return
    if (hasLink) {
        console.log('Link already stored');
        return;
    }

    //if the link is not stored, add it to the array
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));//save the array to local storage
    console.log('Link stored');
}

//delete a link from local storage
export function deleteLink(links, id) {

    let myLinks = links.filter(item => {
        return (item.id !== id);//return all links except the one to be deleted
    });

    localStorage.setItem('@shortLinks', JSON.stringify(myLinks));//save the array to local storage
    console.log('Link deleted');

    return myLinks;

}