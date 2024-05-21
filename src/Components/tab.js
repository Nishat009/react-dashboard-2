import React from 'react'
import { Tab } from '@headlessui/react'
import Table from '../Components/table'
const categories = [
  {
    name: 'Popular',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
]

function tab() {
  return (
    <div className="flex w-full justify-center pt-4">
      <div className="w-full max-w-md">
        <Tab.Group>
          <Tab.List className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className={({ selected }) =>
                  `rounded-full py-1 px-3 text-sm font-semibold text-black focus:outline-none ${
                    selected ? 'bg-black/10' : 'hover:bg-white/5'
                  }`
                }
              >
                {name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-3">
            {categories.map(({ name, posts }, index) => (
              <Tab.Panel key={name} className="rounded-xl bg-white/5">
                {index === 0 ? (
                <Table/>
                ) : (
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="rounded-md pb-1 pt-1 text-sm transition hover:bg-white/5">
                        <a href="javaScript:void()" className="font-semibold text-black">
                          <span className="inset-0" />
                          {post.title}
                        </a>
                        <ul className="flex gap-2 text-white/50" aria-hidden="true">
                          <li>{post.date}</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
export default tab