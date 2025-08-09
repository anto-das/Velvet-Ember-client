
const TitleBox = ({title,heading}) => {
  return (
    <div className="max-w-64 mx-auto my-5">
        <span className=" text-[#D99904] text-sm flex justify-center">{title}</span>
       <div className="divider"></div>
       <h1 className="text-xl text-center text-[#151515] uppercase">{heading}</h1>
       <div className="divider"></div>
    </div>
  )
}

export default TitleBox