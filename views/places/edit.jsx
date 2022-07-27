const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${data.id}?_method=PUT`} method="POST">
                    <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" value={data.place.name} required/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" value={data.place.pic}/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" value={data.place.city}/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <select name="state" id="state" defaultValue={place.state}>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Massachussets">Massachussets</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Maine">Maine</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Montana">Montana</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New York">New York</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Washington">Washington</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wyoming">Wyoming</option>
                    </select>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" value={data.place.cuisines} required/>
                    </div>
                        <input className="btn btn-primary" type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form