import links from './links.json'
import styles from './Footer.styles.module.css'

function Footer () {
  return (
    <div className="w-full">
      <h3 className="text-md font-semibold mb-4">
        Main Topics
      </h3>

      <ul className={styles.links}>
        {links.mainTopics.map((item) => (
          <li key={item.label} className="pl-[6px] text-[12px]">
            <a href={item.url} className="text-slate-500 hover:underline hover:text-blue-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-5 w-full flex justify-center">
        ACAP Dev Documentation {new Date().getFullYear()} ©{' '}
        <a href="https://acaptutorials.github.com/" target="_blank" rel="noreferrer">
          acaptutorials
        </a>
      </div>
    </div>
  )
}

export default Footer
