import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="p-5 bg-violet-800 flex justify-center">
      <Link href="/">
        <Image
          src='data:image/svg+xml,%3Csvg width="140" height="19" viewBox="0 0 140 19" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cg clip-path="url(%23clip0_44_722)"%3E%3Cpath d="M98.2335 18.1106H130.952C132.141 18.1106 133.317 17.8766 134.415 17.4219C135.512 16.9672 136.51 16.3008 137.35 15.4606C138.19 14.6205 138.857 13.6231 139.311 12.5254C139.766 11.4276 140 10.2511 140 9.06298V9.06298C140.002 7.87354 139.769 6.69537 139.316 5.59589C138.862 4.49641 138.196 3.49719 137.355 2.65541C136.515 1.81364 135.517 1.14582 134.418 0.690176C133.32 0.23453 132.142 -1.71428e-06 130.952 0L98.2335 0C97.044 -1.71428e-06 95.8663 0.23453 94.7676 0.690176C93.6689 1.14582 92.6708 1.81364 91.8304 2.65541C90.9901 3.49719 90.3239 4.49641 89.8702 5.59589C89.4164 6.69537 89.1838 7.87354 89.1859 9.06298V9.06298C89.1859 11.4626 90.1391 13.7639 91.8358 15.4606C93.5326 17.1574 95.8339 18.1106 98.2335 18.1106ZM5.17153 18.1362H9.16539V3.54327H14.3369V0H0V3.53303H5.17153V18.1362ZM19.5597 18.1362H23.5535V4.22427H23.6047L28.1874 18.126H31.2596L35.9959 4.22427H36.0471V18.126H40.041V0H34.0246L29.8259 11.828H29.7747L25.6016 0H19.5597V18.1362ZM45.6426 0.0614439H51.6334C53.0281 0.0635876 54.4174 0.23553 55.7706 0.573477C57.0029 0.865821 58.1642 1.40206 59.1859 2.15054C60.174 2.89354 60.9695 3.86281 61.5054 4.97696C62.1112 6.30064 62.4038 7.74614 62.3605 9.20123C62.3882 10.5417 62.1043 11.8704 61.531 13.0824C60.9972 14.1731 60.2318 15.1342 59.2883 15.8986C58.3225 16.673 57.2195 17.2584 56.0369 17.6242C54.7869 18.0211 53.4825 18.2198 52.171 18.213H45.6426V0.0614439ZM49.6365 14.5008H51.6846C52.546 14.5066 53.4052 14.4121 54.2448 14.2191C54.9939 14.0671 55.7024 13.7582 56.3236 13.3129C56.9166 12.8641 57.3882 12.2746 57.6959 11.5975C58.0554 10.7786 58.2302 9.89053 58.2079 8.99642C58.2231 8.19527 58.0476 7.40199 57.6959 6.68203C57.3765 6.04401 56.916 5.48715 56.3492 5.05376C55.7602 4.61631 55.0953 4.29168 54.3881 4.09626C53.6082 3.87817 52.8017 3.7696 51.9918 3.77368H49.6365V14.5008ZM68.1464 0.0614439H74.9053C75.6985 0.0618307 76.4907 0.118295 77.276 0.230415C78.0209 0.326913 78.7434 0.552146 79.4112 0.896057C80.035 1.21973 80.5642 1.69958 80.9473 2.28879C81.3721 3.00778 81.5769 3.83558 81.5361 4.66974C81.5712 5.59862 81.2673 6.50856 80.681 7.2299C80.0826 7.92297 79.2939 8.42505 78.4127 8.67384V8.70456C78.9797 8.78551 79.5297 8.95846 80.041 9.21659C80.5131 9.45368 80.9382 9.77466 81.2954 10.1639C81.6493 10.5536 81.9225 11.0095 82.0993 11.5054C82.29 12.0304 82.3854 12.5853 82.3809 13.1439C82.4116 13.9852 82.1983 14.8174 81.7665 15.5402C81.3648 16.1693 80.8212 16.6954 80.1792 17.0763C79.5044 17.4814 78.7647 17.7672 77.9928 17.9211C77.1968 18.0918 76.385 18.1776 75.5709 18.1772H68.1464V0.0614439ZM72.1403 7.30671H75.0333C75.34 7.30838 75.646 7.27401 75.9447 7.2043C76.2304 7.14226 76.5027 7.02954 76.7486 6.87148C76.9885 6.71674 77.1871 6.50584 77.3272 6.25704C77.4772 5.97352 77.5513 5.65601 77.5422 5.33538C77.5587 5.00951 77.4804 4.68585 77.3169 4.40348C77.1581 4.16153 76.9417 3.96273 76.6871 3.82488C76.4018 3.68163 76.0961 3.58319 75.7808 3.53303C75.4687 3.47266 75.1515 3.44181 74.8336 3.44086H72.1198L72.1403 7.30671ZM72.1403 14.808H75.7245C76.0397 14.8088 76.354 14.7745 76.6615 14.7056C76.9672 14.643 77.2577 14.5213 77.5166 14.3472C77.775 14.1767 77.9905 13.9489 78.1464 13.6815C78.3146 13.3763 78.3977 13.0314 78.3871 12.6831C78.4007 12.3155 78.2888 11.9543 78.0696 11.659C77.8546 11.3932 77.5765 11.1855 77.2606 11.0548C76.9325 10.9181 76.5884 10.8235 76.2366 10.7732C75.8888 10.7238 75.5381 10.6981 75.1869 10.6964H72.1659L72.1403 14.808Z" fill="white" /%3E%3C/g%3E%3Cdefs%3E%3CclipPath id="clip0_44_722"%3E%3Crect width="140" height="18.1874" fill="white" /%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E'
          alt="TMDB"
          width={140}
          height={19}
        />
      </Link>
    </header>
  )
}
