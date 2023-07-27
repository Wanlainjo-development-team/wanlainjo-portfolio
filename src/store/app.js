// Utilities
import { defineStore } from 'pinia'

import lexitidream from '@/assets/lexitidream.png'
import chiropractor from '@/assets/chiropractor.png'
import wanlainjo from '@/assets/wanlainjo.png'
import nneGrace from '@/assets/nneGrace.png'
import banner from '@/assets/banner.jpg'

export const useAppStore = defineStore('app', {
  state: () => ({
    projects: [
      {
        title: 'Recido',
        to: 'https://play.google.com/store/apps/details?id=com.rukkiecodes.recido',
        avatar: banner,
        caption: 'Manage your business effortlessly with Recido! Track sales, create invoices & receipts, and stay organized. Impress clients with professional invoices, generate clear receipts, and access real-time reports. Streamline operations, sync data, and make informed decisions. Download now for a more efficient business!'
      },
      {
        title: 'Lexitindream',
        to: 'https://lexitindream.netlify.app/',
        avatar: lexitidream,
        caption: `Welcome to LexiTidream's Artistry Gallery! Discover our captivating collection of meticulously crafted moments frozen in time, celebrating the innate beauty that surrounds us. Join us on this visual journey where life takes shape through LexiTidream's visionary lens.`
      },
      {
        title: 'Metronet Chiropractic',
        to: 'https://next-chiropractor.netlify.app/',
        avatar: chiropractor,
        caption: `Metronet Chiropractic, founded in 2003 by Dr. Chris Fokumlah, offers natural care for all ages in the Twin Cities metro area. Dr. Chris has 20+ years of experience in treating acute and chronic injuries from automobile accidents, work-related accidents, sports injuries, and providing wellness care, with a focus on helping patients achieve optimal health.`
      },
      {
        title: 'Wanlainjo',
        to: 'https://wanlainjowebsite.netlify.app/',
        avatar: wanlainjo,
        caption: `Whether you want to pursue a career as a Web Developer, a Freelancer, or an Entrepreneur, our courses prepares you adequately for that. This is an immersive, collaborative and intensive program, prepared in a way to help you apply what you learn in real-time through project-based work.`
      },
      {
        title: 'Nne grace',
        to: 'https://nne-grace.netlify.app/',
        avatar: nneGrace,
        caption: 'Join us in our mission to serve those in need. Your generosity can make a difference in the lives of those less fortunate. Contact us today to learn more about how you can help.'
      },
    ],
  }),
})
