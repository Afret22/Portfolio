import Layout from "../../components/Layout";
import GameOfLife from "../../components/GameOfLife";



const GOL = ()=>{
    const [funStep,setFunStep] = React.useState(0)

    const FunContent =()=>{
        switch(funStep){
            case 0:
               return(
               <div>
                <GameOfLife/>
             </div>
             )
            case 1:
                return (
                <div></div>
                )
        }
    }

return(
    <Layout>
    <div style={{ margin:"auto", margin:""}}>
    {FunContent()}
    </div>
    </Layout>
)
}

export default GOL;
