import { useState } from "react";

const CalcImc = ()=>{
    const [poids,setPoids] = useState("")
    const [size,setSize] = useState("")
    const [imc,setImc] = useState(null)
    const [msg,setMsg] = useState("")
    const [color,setColor] = useState("")
    
    const Calcul =()=>{
        const p = Number(poids)
        const s = Number(size)
    
    if (poids === ""|| size === ""|| p <= 0 || s <= 0){
        setImc(null)
        alert("Please enter a valid weight and height.")
        return ;
    }

    const resu = (p*10000)/ (s**2)
    setImc(resu.toFixed(2))

    if(resu<19){
        setMsg("Underweight")
        setColor("text-warning")
    } else if (resu <= 25){
        setMsg("Normal")
        setColor("text-success")
    } else if(resu <= 30){
        setMsg("Overweight")
        setColor("text-warning")
    } else{
        setMsg("Obese")
        setColor("text-danger")
    }
    
    }
    return(
        <div className="container-fluid mt-4">
            <div className="row  justify-content-center">
               
                <h3>Body mass index</h3>
                <div className="col-md-6 mt-3">
                    

                    <div className="mb-3">
                        <label className="form-label">Poid in (kg)</label>
                        <input type="number" className="form-control" value={poids} onChange={(e)=> setPoids(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Size in (cm)</label>
                        <input type="number" className="form-control" value={size} onChange={(e)=> setSize(e.target.value)}/>
                    </div>

                    <button className="btn btn-primary " onClick={Calcul}>calculer</button>
                </div>
            </div>
            <div className="row mt-4 justify-content-center">
                {
                    msg!==""?<p className="alert alert-info w-25 " >imc :{imc} - <span className={`${color} fw-bold`}>{msg}</span></p>:msg
                }
            </div>
        </div>
    )
}
export default CalcImc