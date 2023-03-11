
import Config from "../Config.json";
// import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import Chart from 'react-apexcharts';
import { useState } from "react";
import {useEffect} from "react";

function Barchart(){
    const [products,setproducts] = useState([]);
    const [price,setprice] = useState([]);

    useEffect(()=> {
        const prod = [];
        const priceval = [];

        const getRecords = async()=>{
            const dataReq = await fetch("http://localhost/backend_file/displayproduct.php");
            const dataRes = await dataReq.json();
            // console.log("dataRes: ",dataRes);
            for(let i=0; i<dataRes.length;i++)
            {
                prod.push(dataRes[i]["title"]);
                priceval.push(dataRes[i]["price"]);
            }
            // console.log(prod);
            setproducts(prod);
            setprice(priceval);
        }
        getRecords();
    },[]);

 

    return(
        <main>


            <Chart
            type="bar"
            width={600}
            height={400}

            series={[
                {
                    name:"Social Media Users",
                    data: price,

                },
            ]}
            options={{
                title:{
                    text:"Products List",
                    style:{fontSize: 20},
                    
                },
                colors:['#981B00'],
                theme:{mode:'light'},
                xaxis: {
                    tickPlacement: "on",
                 
                    categories: products,
                    title: {
                       
                        style: { color: "#981B00", fontSize: 30 },
                      },
                  },
                  yaxis: {
                    labels: {
                      formatter: (val) => {
                      return `${val}`;
                      },
                    style: { fontSize: "15", colors: ["#364958"] },
                  },
                     title: {
                     text: "Price",
                     style: { color: "#364958", fontSize: 20 },
                  },
                },
                dataLabels: {
                    formatter: (val) => {
                      return `${val}`;
                    },
                    style: {
                      colors: ["#000000"],
                      fontSize: 15,
                    },
                  },
                  legend:{
                    show:true,
                    position:'bottom'
                  }
            }


            }
            >

            </Chart>
        </main>
    )

}
export default Barchart;