import backImg from '../pics/backToAboutPage.jpg'

const About=()=>{
    const des={fontSize: "x-large", fontFamily: "cursive",
        width: "600px", height: "100"}
    
    return <>
    <div style={{backgroundImage: `url(${backImg})`, height: "100vh", width: "98.5vw"} }>
    <center>
        <h2 style={{fontWeight: "bolder"}}>About our site</h2>
    <div style={des}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor accusamus, culpa, pl
    aceat eos recusandae vero numquam inventore, quas autem velit labore consectetur deleniti temporibus? Accus
    antium beatae minima, totam vel modi ad quidem perferendis vero excepturi tempore labore soluta odio eum aut
     dignissimos suscipit! Voluptas voluptatum placeat numquam dolores, repellendus in fugit iure incidunt aliqua
     m laudantium doloremque harum, ratione beatae obcaecati aspernatur magni quod quam non. Recusandae sit aspern
     atur cupiditate ipsum quae, eius tenetur accusantium quo deleniti autem obcaecati distinctio qui beatae cu
     m quasi dolores blanditiis explicabo officia, minima sapiente amet ducimus, maiores voluptatibus. Eveniet 
     suscipit tenetur hic sit nihil.</div>
    </center>
    </div>
    </>
}
export default About