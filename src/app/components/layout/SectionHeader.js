export default function SectionHeader ({subHeader, mainHeader}){
    return(
        <>
        <h3 className="uppercase text-gray-600 font-semibold leading-3">
          {subHeader}
        </h3>
        <h2 className="color font-bold text-4xl italic">{mainHeader}</h2>
        </>
    )

}