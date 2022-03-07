function Searchterm(term) {
    term.addEventListener("keypress",(e)=>{
        if (e.code=="Enter")
        {
          localStorage.setItem("search_term",term.value);
          window.location.href="./search.html"
        }
      })


}

export default Searchterm