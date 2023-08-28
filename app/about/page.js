

// async function getData(){
//     const res = await fetch('https://dummyjson.com/products/1')
//     return res.json();
// }

const page = async () => {
    // const data = await getData();
    return (
        <div className="aboutMargin">
            {/* {JSON.stringify(data)} */}
            
            <section className="row sectionOne">
                <p> This is Section One</p>
            </section>
            <section className="row sectionTwo">
                <p> This is section Two</p>
            </section>


        </div>
    );
};

export default page;