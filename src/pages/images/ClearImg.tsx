
import { Images } from "../../assets/Images";   
export const ClearImg = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <h1>sadassdassdsasdsasd</h1>
            {Images.map((image) => (
                <img
                    key={image.id}
                    src={image.src.imagem}
                    title={image.title}
                    alt="Clear Image"
                    className="w-1/2 h-auto"
                />
            ))}
        </div>
    );
}
