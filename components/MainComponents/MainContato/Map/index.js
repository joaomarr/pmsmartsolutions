import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";

export function Map() {
    const compCoords = { lat: -19.959, lng: -44.040 };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    function MapComponent() {
        if (isLoaded) {
            return (
                <GoogleMap
                    zoom={10}
                    center={compCoords}
                    mapContainerClassName="w-full h-96 md:h-[650px] -translate-y-[100px] rounded-lg relative"
                >
                    <div className="absolute top-0 left-0 m-2 p-5 w-[75%] bg-white h-28 shadow-2xl rounded-lg lg:w-1/3">
                        <div>
                            <h3 className="text-base text-black font-bold 2xl:text-lg">
                                Av. Frei Henrique Soares, 467 - Inconfidentes
                            </h3>
                            <p className="text-xs text-gray-500 font-light truncate">
                                Av. Frei Henrique Soares, 467 - Inconfidentes, Contagem - MG, 32260-340
                            </p>
                            <a className="text-blue-500/80 underline text-[10px] 2xl:text-xs" href="https://www.google.com/maps/dir//Av.+Frei+Henrique+Soares,+467+-+Inconfidentes,+Contagem+-+MG,+32260-340/@-19.9467966,-44.0414214,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0xa6944e83971793:0x81f9e5181d8f61a2">
                                Ver no Google Maps
                            </a>
                        </div>
                    </div>
                    <MarkerF 
                        position={compCoords} 
                        options = {{
                            label: {
                                text: "PM Smart Solutions",
                                className: "mb-14"
                            }
                        }}
                    />
                    
                </GoogleMap>
            )
        }
    }

    return (
        <section className="layout-padding w-full">
            <MapComponent />
        </section>
    )
}