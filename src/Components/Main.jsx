import { useDir } from "../hooks/useDir"
import Banner from "./Banner";
import CollageContainer from "./CollageContainer";
const Main = () => {

    const { directorios, error, loader } = useDir();

    return (
        <>
            <Banner />

            <div className="content">

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id omnis rerum tenetur repellendus accusamus similique, inventore deleniti possimus. Earum dolorem magni ipsa, vitae distinctio dolore voluptates consequatur quae eius consequuntur.</p>

                <h2 style={{ textAlign: "center" }}>Excursiones</h2>
                <div className="album">
                    {(!loader && !error) &&
                        directorios.map((item, index) => (
                            <div className="presentation" key={index}>
                                <div>
                                    <CollageContainer key={index} reference={item} />
                                    <h3>{item.replaceAll("_", " ")}</h3>
                                </div>
                            </div>
                        ))
                    }

                    {error &&
                        <div>
                            <h2>Error: {error}</h2>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Main;