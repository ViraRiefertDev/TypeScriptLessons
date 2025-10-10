// Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). 
// Підрахувати кількість кожної з нагород. Використати enum. Можете і never якось застосувати


if (confirm('Почати тестування?')) {
  enum Reward {
    Gold = "Gold medal",
    Silver = "Silver medal",
    Bronze = "Bronze medal",
    Certificate = "Certificate"
  }

  function getRanomNumber(minNum:number, maxNum:number):number{
    return minNum + Math.floor(Math.random()*(maxNum-minNum+1))
  }

  function getRandomReward():Reward{
    const radomRewardNumber = getRanomNumber(1,4) 
    switch (radomRewardNumber) {
      case 1: return Reward.Gold
      case 2:return Reward.Silver
      case 3:return Reward.Bronze
      case 4:return Reward.Certificate
      default:
        throw new Error(`Невідома нагорода: ${radomRewardNumber}`)
    }
  }

  const ranomRewardArray:Reward[] = []
  const LENGTH_OF_ARRAY = 20
  for(let i=0; i<LENGTH_OF_ARRAY; i++){
    ranomRewardArray.push(getRandomReward())
  }
  console.log(ranomRewardArray)
  let countOfGoldMedals = 0
  let countOfSilverMedals = 0
  let countOfBronzeMedals = 0
  let countOfCertificates = 0

  ranomRewardArray.forEach((reward)=>{
    switch (reward) {
      case Reward.Gold: countOfGoldMedals++
        break
      case Reward.Silver: countOfSilverMedals++
        break
      case Reward.Bronze: countOfBronzeMedals++
        break
      case Reward.Certificate: countOfCertificates++
        break;
  
      default:
        const _exhaustive:never = reward
        throw new Error(`Невідома нагорода: ${reward}`);
    }
  })

  document.write(`
    <h2>🏆 Результати підрахунку нагород</h2>
    <p><strong>Загальна кількість нагород:</strong> ${LENGTH_OF_ARRAY}</p>
    <hr/>
    <ul style="list-style:none; font-size:16px; line-height:1.6;">
      <li>🥇 <strong>${Reward.Gold}</strong>: ${countOfGoldMedals}</li>
      <li>🥈 <strong>${Reward.Silver}</strong>: ${countOfSilverMedals}</li>
      <li>🥉 <strong>${Reward.Bronze}</strong>: ${countOfBronzeMedals}</li>
      <li>📜 <strong>${Reward.Certificate}</strong>: ${countOfCertificates}</li>
    </ul>
    <hr/>
    <p><strong>Згенерований масив:</strong><br/>[${ranomRewardArray.join(', ')}]</p>
  `);
}
