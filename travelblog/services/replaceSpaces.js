function replaceSpaces(word)
{
    let cleaned="";
    for(let l of word)
        if(l==" ")
            cleaned+="-";
        else
            cleaned+=l;
    return cleaned;
}

console.log(replaceSpaces('Hello world!'))