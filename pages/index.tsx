import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { wows, Wow } from '../components/wow'
import { FaFileVideo, FaUser, FaClock, FaCalendar } from "react-icons/fa";
import { LabelItem } from '../components/LabelItem';

function randomWow(): Wow {
  return wows[Math.floor(wows.length * Math.random())];
}

const Home: NextPage = () => {

  const [wow, setWow] = useState<Wow>(randomWow());
  const url = wow.video['1080p'];
  const newWow = () => setWow(randomWow());

  return (
    <>
      <style jsx>{`
        .background {
          width: 100vw;
          height: 100vh;
          background: black;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
          overflow-y: auto;
          padding-bottom: 64px;
          max-width: 480px;
        }

        .info, .line {
          padding: 0 32px;
        }
        .btn {
          display: block;
          bottom: 16px;
          left: 16px;
          width: calc(100vw - 32px);
          height: 48px;
          position: absolute;
          background: dodgerblue;
          border-radius: 8px;
          box-shadow: 0 0 8px #222;
          border: none;
          outline: none;
          color: white;
          font-weight: bolder;
          font-size: 18px;
        }
        .line {
          width: 100%;
          margin: 32px 0;
          text-align: center;
          font-style: italic;
          font-size: 1.5em;
        }
        video {
          width: 100%;
          height: 40vh;
          min-height: 100px;
        }
        @media (min-width: 720px) {
          .background {
            flex-direction: row;
          }
          video {
            height: 60%;
            flex-grow: 1;
            width: 1px;
            display: block;
          }
          .info {
            min-width: 140px;
          }
        }
      `}</style>
      <Head>
        <title>WOW!</title>
      </Head>
      <div className='background'>
        <video src={url} controls autoPlay />
        <ul className='info'>
          <LabelItem icon={FaFileVideo} title='Movie' value={wow.movie} />
          <LabelItem icon={FaCalendar} title='Year' value={`${wow.year}`} />
          <LabelItem icon={FaUser} title='Character' value={wow.character} />
          <LabelItem icon={FaClock} title='TimeStamp' value={wow.timestamp} />
        </ul>
        <button className='btn' onClick={newWow}>WOW! 😋</button>
      </div>
    </>
  )
}

export default Home
