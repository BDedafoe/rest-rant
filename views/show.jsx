const React = require('react')
const Def = require('./default')

function show (data) {
    return (
        <Def>
            <main>
                <div class="left-side">
                    <image>{data.place.pic}</image>
                </div>
                
                <div class="right-side">
                    <h1>{data.place.name}</h1>
                    <h2>Rating</h2>
                    <h3>Not Rated</h3>
                    
                    <h2>Description</h2>
                    <h3>Located in {data.place.city} and serving {data.place.cuisines}</h3>
                        <a href="" className="btn btn-warning">Edit
                        </a>  
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>     

                </div>
               
                <div>
                    <h2>Comments</h2>
                    <hh3>No comments yet!</hh3>
                </div>
            </main>
        </Def>
    )
}

module.exports = show