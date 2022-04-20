import { Avatar, IconButton, Button } from '@material-ui/core'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import Head from 'next/Head'
function Sidebar() {
  return (
    <div>
      <Head>
        <title>WhatsFake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="z-1 sticky top-0 flex h-[80px] items-center justify-between border-b-[1px] border-[whitesmoke] p-[15px]">
        <Avatar className=" cursor-pointer hover:opacity-60" />
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>
      <div>
        <div className="flex w-3/5 items-center justify-end">
          <SearchIcon className="search" />
          <input
            className="p-2  text-lg focus:outline-none"
            placeholder="Search in chats"
          ></input>
        </div>

        <SidebarButton className="w-100">Start a new chat</SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: whitesmoke solid 1px
    border-bottom: whitesmoke solid 1px
  }
`
