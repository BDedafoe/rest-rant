const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''
        if (data.message) {
            message = (
                <h4 className="alert-danger">
                    {data.message}
                </h4>
            )
        }
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form method="POST" action="/places">
                <div class="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic"/>
                    </div>
                    </div>
                    <div class="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city"/>
                    </div>
                   
                    <div className="form-group col-sm-4">
                        <label htmlFor="state">State</label>
                        <select name="state" className="form-control" id="state">
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AZ</option>
                        <option value="AR">AR</option>
                        <option value="CA">CA</option>
                        <option value="CT">CT</option>
                        <option value="CO">CO</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="IA">IA</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="MA">MA</option>
                        <option value="MD">MD</option>
                        <option value="ME">ME</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MO">MO</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="NE">NE</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NV">NV</option>
                        <option value="NY">NY</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VA">VA</option>
                        <option value="VT">VT</option>
                        <option value="WA">WA</option>
                        <option value="WI">WI</option>
                        <option value="WV">WV</option>
                        <option value="WY">WY</option>
                    </select>
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded Year</label>
                        <input 
                            type="number"
                            className="form-control"
                            id="founded"
                            name="founded"
                            value={new Date().getFullYear()}/>
                    </div>
                    </div>
                   
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required/>
                    </div>
                        <input className="btn btn-primary" type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form