import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>The Royal Museum</title>
        <meta name='description' content='The Royal AI Gallery' />
        <link rel='icon' href='/favicon.ico' />
      </Head>



      <main className={styles.main}>


              <Navbar />


        {/* <p className={styles.description}>
          Get started by checking out our tools below<br/>
        </p> */}
        <br/>
        <br/>

          <h1 className={styles.title}>

          <br/>The Royal Gallery
          </h1>

          <div className={styles.card}>
              <img src='/raihd.png' />
          </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
        <div className='grid grid-col-2 text-md'>
          {/* <a className={styles.card} > */}
            <h4 className='font-bold text-white text-xl'> Reborn Royalty by Royal AI</h4>
            <p className='text-white text-lg '>Reborn Royalty – When You are Reborn, What will You Become?</p>
          {/* </a> */}




          <a href="https://mint.royalai.xyz/" className={styles.card}>
          <h4 className='font-bold'> MINT HERE</h4>
            <p className=' '>Click here to mint. (9/8/22 - 8pm EST / DeLayed a lot.)</p>
          </a>
          <br/>



          {/* <a
            href="https://staking.theshadyclass.xyz/"
            className={styles.card}
          >
          <h4 className='font-bold  '> SENGOKU DEGENS</h4>
            <p className=' '>Stake your TSC NFTs for $CRIM token yields.<br/></p>

          </a>
          <br/>
          <br/>
          <a
            href="http://collector.theshadyclass.xyz/"
            className={styles.card}
          >
          <h4 className='font-bold text-amber-500  '>KRAZY KOMODOS</h4>
            <p className='text-amber-500  '>Collect your un-used on-chain SOL.<br/></p>

          </a>
          <br/>
          <br/> */}
          {/* <a
            href="https://magiceden.io/marketplace/tshc"
            className={styles.card}
          >
          <h2 className='font-bold text-white '>TRIPPIN BABY APES</h2>
            <p className='text-white '>Advanced and Free Access to holders. Check out our NFT collection in Magiceden.<br/></p>

          </a> */}
          <br/>
          <br/>
          


          
          {/*<a href="minthash" className={styles.card}>
            <h2>Mint Hash Getter&rarr;</h2>
            <p>Get your mint hash list here, anon!</p>
          </a>

          <a href="holdersnapshot" className={styles.card}>
            <h2>Holder Snapshot&rarr;</h2>
            <p>Get your holder list here, anon!</p>
          </a>*/}
          

        </div>
        {/* <br/>
        <br/> */}
        {/* <a href="https://discord.gg/7SrNbVyHDD"> */}
        <h2 className='mb-6 text-xs pt-1 pb-1 text-white text-center w-full'>          
        The Royal AI Collection 👑 - 2022 </h2>
        {/* </a> */}

      </main>

    </div>
  )
}

export default Home
