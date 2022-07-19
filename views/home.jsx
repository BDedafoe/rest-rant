const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="images/mainBurger.jpg" alt="burgerPic"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@1ncreased?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lidye</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
            <div class="content">
            <div class="content-inside">
                <h1>Sticky Footer with Negative Margin 2</h1>
                 <p><button id="add">Add Content</button></p>
            </div>
            </div>
            <footer class="footer">Footer </footer>
        </Def>
    )
}

module.exports = home