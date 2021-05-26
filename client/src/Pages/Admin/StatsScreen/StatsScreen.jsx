import React from 'react';
import moment from 'moment';
import "moment/locale/es";
import { useEffect } from 'react';
import { Bar, Line, Pie, Doughnut, HorizontalBar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingOrders } from '../../../actions/orders';
import { showUsers } from '../../../actions/users';
import { Container } from '../ProductsManagement/ProductsManagement.styles';
import { StatsContainer, TopCards, TopCard, GraphicsCards, GraphicCard, LineGraphic, PieGraphic, DoughnutGraphic, BarGraphic, HorizontalBarGraphic, Linea, Sales } from './StatsScreen.styles';
import Loading from '../../../Components/Loading/Loading';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { SalesByMonth, totalCarrito, totalPorPais, totalVendidos, totalVendidosPorColor, totalVentas } from '../../../actions/statistics';

const StatsScreen = () => {
  moment.locale("es");
  const graphicUserMonthNames = [];
  const graphicUserMonthQuantities = [0,0,0,0,0,0,0];
  const currentMonth = moment().format('MMMM');

  for (let i = 0; i < 7; i++) {
    graphicUserMonthNames.unshift(moment().subtract(i, 'month').format('MMMM'));
  }

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.loading);
  const { orders } = useSelector(state => state.orders);
  const { users } = useSelector(state => state.users);

  useEffect(() => {
    {orders?.length === 0 && dispatch(startLoadingOrders(""))}
    {users?.length === 0 && dispatch(showUsers())}
  },[])

  const completeOrders = orders?.filter(ord => ord.status === 'Complete');
  const incompleteOrders = orders?.filter(ord => ord.status !== 'Complete');

  const maleUsers = users?.filter(user => user.gender === 'male');
  const femaleUsers = users?.filter(user => user.gender === 'female');
  const otherUsers = users?.filter(user => user.gender === 'other');

  const monthUsers = users?.filter(user => user.monthDate === currentMonth);

  const argUsers = users?.filter(user => user.country === 'argentina');
  const chiUsers = users?.filter(user => user.country === 'chile');
  const colUsers = users?.filter(user => user.country === 'colombia');
  const otrUsers = users?.filter(user => user.country === 'other');

  if(users) {
    graphicUserMonthNames.forEach((date, i) => {
      users.forEach((user) => {
        if(user.monthDate === date) {
          graphicUserMonthQuantities[i] = graphicUserMonthQuantities[i] + 1;
        }
      })
    })
  };

  var options={
    scales: {
        y: {
            beginAtZero: true
        }
    }
}

const qCart= useSelector((state)=> state.statistics.totalCart)
const qSales= useSelector((state)=> state.statistics.totalSalesQ)
const totalSales= useSelector((state)=>state.statistics.totalSalesP)
const Arg = useSelector((state)=> state.statistics.Arg)
const salesPerMonth= useSelector((state)=>state.statistics.salesPerMonth)

const Col = useSelector((state)=> state.statistics.Col)
const Ven = useSelector((state)=> state.statistics.Ven)
const Chi = useSelector((state)=> state.statistics.Chi)
const Other = useSelector((state)=> state.statistics.Otros)
const colors= useSelector((state)=>state.statistics.totalColors)
const mostSold= useSelector((state)=>state.statistics.mostSold)
mostSold.push({name: "te verde", order_details: {quantity: 0}})
mostSold.push({name: "te negro", order_details: {quantity: 0}})
mostSold.push({name: "te amarillo", order_details: {quantity: 0}})
mostSold.push({name: "te rojo", order_details: {quantity: 0}})
mostSold.push({name: "te blanco", order_details: {quantity: 0}})



useEffect(() => {
   dispatch(totalCarrito())
   dispatch(totalVendidos())
   dispatch(totalVentas())
   dispatch(totalPorPais())
   dispatch(totalVendidosPorColor())
   dispatch(SalesByMonth())

},[qSales, qCart, totalSales])


  if(loading) return <Loading/>;

  return (<>
    <Container>
    <h1>Estadísticas de usuarios:</h1>
    <StatsContainer>
      <TopCards>
        <TopCard>
          <div>
            <h2>{users.length}</h2>
            <p>Usuarios registrados</p><br/>
          </div>
          <img src="https://icongr.am/entypo/users.svg?size=128&color=75BA93" alt="usersIcon"/>
        </TopCard>
        <TopCard>
          <div>
            <h2>{monthUsers.length}</h2>
            <p>Usuarios<br/>registrados este mes</p>
          </div>
          <img src="https://icongr.am/entypo/add-user.svg?size=128&color=75BA93" alt="usersIcon"/>
        </TopCard>
        <TopCard>
          <div>
            <h2>{completeOrders.length}</h2>
            <p>Ordenes<br/>finalizadas</p>
          </div>
          <img src="https://icongr.am/entypo/shopping-cart.svg?size=128&color=75BA93" alt="usersIcon"/>
        </TopCard>
        <TopCard>
          <div>
            <h2>{incompleteOrders.length}</h2>
            <p>Ordenes no<br/>finalizadas</p>
          </div>
          <img src="https://icongr.am/entypo/creative-commons-noncommercial-us.svg?size=128&color=75BA93" alt="usersIcon"/>
        </TopCard>
      </TopCards>
      <GraphicsCards>
        <GraphicCard>
          <LineGraphic>
            <div>
              <Line
                data={{
                  labels: graphicUserMonthNames,
                  datasets: [{
                    label: 'Usuarios registrados a través del tiempo',
                    data: graphicUserMonthQuantities,
                    backgroundColor: [
                      'rgba(116, 180, 228, .9)',
                      'rgba(117, 186, 147, 1)',
                      'rgba(117, 186, 147, 1)',
                      'rgba(117, 186, 147, 1)',
                      'rgba(117, 186, 147, 1)',
                      'rgba(117, 186, 147, 1)',
                      'rgba(117, 186, 147, 1)',
                    ]
                  }]
                }}
                height={400}
                width={400}
                options={{
                  maintainAspectRatio: false,
                  legend: {
                    labels: {fontSize: 16}
                  },
                  scales: {
                    xAxes: [{gridLines:{display:false}}],
                    yAxes: [{gridLines:{display:false}}]
                  }
                }}
              />
            </div>
          </LineGraphic>
        </GraphicCard>
        <GraphicCard right>
          <PieGraphic>
            <h3>Genero de usuarios registrados en la plataforma</h3>
            <div>
              <Pie
                data={{
                  labels: ['Mujeres', 'Hombres', 'Otros'],
                  datasets: [{
                    label: 'Sexo de usuarios registrados',
                    data: [femaleUsers.length, maleUsers.length, otherUsers.length],
                    backgroundColor: [
                      'rgba(185, 234, 164, 1)',
                      'rgba(116, 180, 228, .6)',
                      'rgba(255, 205, 86, 1)'
                    ]
                  }]
                }}
                options={{maintainAspectRatio: false}}
              />
            </div>
          </PieGraphic>
          <DoughnutGraphic>
            <h3>Ubicación de usuarios registrados en la plataforma</h3>
            <div>
              <Doughnut
                data={{
                  labels: ['Argentina', 'Chile', 'Colombia', 'Otros'],
                  datasets: [{
                    label: 'Ubicación de usuarios registrados',
                    data: [argUsers.length, chiUsers.length, colUsers.length, otrUsers.length],
                    backgroundColor: [
                      'rgba(185, 234, 164, 1)',
                      'rgba(116, 180, 228, .6)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 205, 86, 1)'
                    ]
                  }]
                }}
                height={200}
                width={300}
                options={{maintainAspectRatio: false}}
              />
            </div>
          </DoughnutGraphic>
        </GraphicCard>
      </GraphicsCards>
    </StatsContainer>
    </Container>

    <Container>
      <h1>Ventas</h1>
      <StatsContainer>
      <TopCards>
          <TopCard>
            <div>
              <h2>${totalSales}</h2>
              <p> Ventas Totales</p>
            </div>
          <span><MonetizationOnIcon/></span>
          </TopCard>
          <TopCard>
            <div>
              <h2>{qCart}</h2>
              <p> Productos agregados al carrito</p>
              </div>
          
          </TopCard>
          <TopCard>
            <div>
              <h2>{qSales}</h2>
              <p> Cantidad de productos vendidos</p>
            </div>
          </TopCard>
          <TopCard>
          <div>
          <p>Ventas por país</p>
            <Linea>
            <button>Argentina<p>{Math.round((Arg/totalSales)*100)}%</p></button>
            <button>Chile <p>{Math.round((Chi/totalSales)*100)}%</p></button>
            <button>Venezuela<p>{Math.round((Ven/totalSales)*100)}%</p></button>
            <button>Colombia<p>{Math.round((Col/totalSales)*100)}%</p></button>
            <button>Otros<p>{Math.round((Other/totalSales)*100)}%</p></button>
            </Linea>
                
              
              </div>
          </TopCard>
      </TopCards>
      <GraphicsCards>
          <GraphicCard>
              <LineGraphic>
      <Bar
          data={{
              labels: graphicUserMonthNames,
              datasets:[{
                  label: "Ventas mensuales $", 
                  data: salesPerMonth,
              backgroundColor: [
                  'rgba(117, 186, 147, 1)',
                  'rgba(117, 186, 147, 1)',
                  'rgba(117, 186, 147, 1)',
                  'rgba(117, 186, 147, 1)',
                  'rgba(117, 186, 147, 1)',
                  'rgba(117, 186, 147, 1)',
              ]
          }]
          }}
          height={430}
          width={400}
          options={{
              maintainAspectRatio: false,
              legend: {
                labels: {fontSize: 16}
              },
              scales: {
                xAxes: [{gridLines:{display:false}}],
                yAxes: [{gridLines:{display:false}}]
              }
            }}
      /> 
      </LineGraphic>
      </GraphicCard>
      <GraphicCard right>
      <PieGraphic>
      <h3>Composición ventas totales según tipo de té</h3>
      <div>
        <Pie
          data={{
            labels: ['Rojo', 'Verde', 'Azul', 'Negro', 'Blanco', 'Amarillo'],
            datasets: [{
              label: 'Composición ventas totales según tipo de té',
              data: [colors.red, colors.green, colors.blue, colors.black, colors.white, colors.yellow],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(185, 234, 164, 1)',
                'rgba(116, 180, 228, .6)',
                '#424C47',
                'whitesmoke',
                'rgba(255, 205, 86, 1)'
                
              ]
            }]
          }}

        />
      </div>
    </PieGraphic>
    <HorizontalBarGraphic>
    <HorizontalBar
          
          data={{
              labels: [ mostSold[0].name, mostSold[1].name, mostSold[2].name, mostSold[3].name,mostSold[4].name],
              datasets:[{
                  label: "Top 5 productos más vendidos", 
                  data: [mostSold[0].order_details.quantity, mostSold[1].order_details.quantity, mostSold[2].order_details.quantity, mostSold[3].order_details.quantity, mostSold[4].order_details.quantity],
              backgroundColor: [
                  'rgba(117, 186, 147, 1)',
                  'rgba(116, 180, 228, .6)',
                  'rgba(255, 205, 86, 1)',
                  'rgba(255, 99, 132, 1)',
                  "#D196FA",
                  
              ]
          }]
          }} 
          options={{
            scales: {
              xAxes: [{
                 display: true,
                 ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: mostSold[0].order_details.quantity+1,
              }
          }]}
          }}
        />
          </HorizontalBarGraphic>
      </GraphicCard>

      </GraphicsCards>
      </StatsContainer>
    </Container>

   
  </>)
}

export default StatsScreen
