import React from 'react'
import './css/Team.css'
import Jai from '../static/jai.jpg'
import Inesh from '../static/inesh.jpg'
import Janmejay from '../static/janmejay.jpg'
import Gaurika from '../static/gaurika.jpg'
const Team = () => {
    return (
        <>
            <div className="team">
                <h1>The Team</h1>
                <div className="people">
                    <div className="man">
                        <div className="manimage">
                            <img src={Inesh} alt="inesh" />
                        </div>
                        <div className="name">
                            <h2>Manan</h2>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div className="man">
                        <div className="manimage">
                            <img src={Janmejay} alt="janmejai" />
                        </div>
                        <div className="name">
                            <h2>Taran Chadha</h2>
                            <p>COO</p>
                        </div>
                    </div>
                                    <div className="man">
                        <div className="manimage">
                            <img src={Jai} alt="jai" />
                        </div>
                        <div className="name">
                            <h2>Jai Nanda</h2>
                            <p>Development</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
