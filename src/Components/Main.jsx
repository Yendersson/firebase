import { useDir } from "../hooks/useDir"
import CollageContainer from "./CollageContainer";
const Main = () => {

    const {directorios, error, loader} = useDir();
    
    return (    
        <div>
            {(!loader && !error) &&
                directorios.map((item, index) => (
                    <div key={index}>
                        {item}
                    {
                    <div>
                        <CollageContainer key={index} reference={item} />
                    </div>
                }
                </div>
                ))
            }

            {error && 
                <div>
                    <h2>Error: {error}</h2>
                </div>
            }
        </div>
    )
}

export default Main;