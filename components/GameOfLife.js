import { Card } from "react-bootstrap";
import produce from "immer";

const numRow = 50;
const numCol = 50;
const op = [
    [0,1],
    [0,-1],
    [1,-1],
    [1,1],
    [-1,-1],
    [-1,1],
    [1,0],
    [-1,0]
]

const GameOfLife = ()=>
{
    const [grid,setGrid] = React.useState(()=>{
        const rows = [];
        for (let i=0; i< numRow; i++){

            rows.push(Array.from(Array(numCol), () => 0 ));
            
        }
        return rows;
    });
    const [running,setRunning] = React.useState(false);
    const runningRef = React.useRef(running);
    runningRef.current = running;

    const runSim = React.useCallback(()=>{
        if (!runningRef.current){
            return;
        }
        setGrid(g =>{
            return produce( g, gridCopy=>{

                for (let i=0;i<numRow;i++){
                    for (let j=0;j<numCol;j++){
                        let nighbour =0;
                        op.forEach(([x,y])=>{
                            const newI= i +x;
                            const newJ=j+y;
                            if (newI >= 0 && newJ >=0 && newJ < numCol && newI <numRow){
                                nighbour += g[newI][newJ];
                            }

                        })
                        if ( nighbour < 2 || nighbour >3){
                            gridCopy[i][j]=0;
                        }else if(g[i][j] === 0 && nighbour === 3){
                            gridCopy[i][j]=1;

                        }

        
                    }
                }

            })
        })
        
        setTimeout(runSim,(100))
    },[]); 

   


    return(
        <Card style={{width: '1000px',margin: 'auto'}}>
            <div style={{display:'flex',justifyContent:"center"}}>  
            <button
            style={{margin:"5px"}}
            onClick={()=> {
                setRunning(c=> !c);
                if (!running){
                    runningRef.current = true;
                    runSim()
                }

            }}
            
            >{running ?"stop":"start"}</button>
            <button
            style={{margin:"5px"}}

        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRow; i++) {
            rows.push(
              Array.from(Array(numCol), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }

          setGrid(rows);
        }}
      >
        Random
      </button>
      <button 
            style={{margin:"5px"}}

      onClick={()=>{
          const rows = [];
          for (let i = 0; i < numRow; i++) {
            rows.push(
              Array.from(Array(numCol), () => 0)
            );
          }

          setGrid(rows);

      }} >Clear</button>
      
            </div>
            
        <div style={{
            display: "grid",
            gridTemplateColumns:`repeat(${numCol},20px)`
        }}>
            
            {grid.map((rows,i)=>
                rows.map((col,k)=>
                     (
                    <div
                    onClick={()=>{
                        const newGrid = produce(grid,gridCopy => {
                            gridCopy[i][k]=!gridCopy[i][k] ;
                        })
                        setGrid(newGrid);
                    }}
                    key={`${i}-${k}`}
                    style={ { 
                        width:20,
                        height:20,
                        backgroundColor: grid[i][k] ? "black" : undefined,
                        border:"solid 1px black "
                    }}
                    />
                        
                    
                    ))
            )}
     
        </div>
        </Card>
    )
}

export default GameOfLife;