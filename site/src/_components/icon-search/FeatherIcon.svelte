<script>
  import Activity from '@svelte-parts/icons/feather/activity'
  import Airplay from '@svelte-parts/icons/feather/airplay'
  import AlertCircle from '@svelte-parts/icons/feather/alert-circle'
  import AlertOctagon from '@svelte-parts/icons/feather/alert-octagon'
  import AlertTriangle from '@svelte-parts/icons/feather/alert-triangle'
  import AlignCenter from '@svelte-parts/icons/feather/align-center'
  import AlignJustify from '@svelte-parts/icons/feather/align-justify'
  import AlignLeft from '@svelte-parts/icons/feather/align-left'
  import AlignRight from '@svelte-parts/icons/feather/align-right'
  import Anchor from '@svelte-parts/icons/feather/anchor'
  import Aperture from '@svelte-parts/icons/feather/aperture'
  import Archive from '@svelte-parts/icons/feather/archive'
  import ArrowDown from '@svelte-parts/icons/feather/arrow-down'
  import ArrowDownCircle from '@svelte-parts/icons/feather/arrow-down-circle'
  import ArrowDownLeft from '@svelte-parts/icons/feather/arrow-down-left'
  import ArrowDownRight from '@svelte-parts/icons/feather/arrow-down-right'
  import ArrowLeft from '@svelte-parts/icons/feather/arrow-left'
  import ArrowLeftCircle from '@svelte-parts/icons/feather/arrow-left-circle'
  import ArrowRight from '@svelte-parts/icons/feather/arrow-right'
  import ArrowRightCircle from '@svelte-parts/icons/feather/arrow-right-circle'
  import ArrowUp from '@svelte-parts/icons/feather/arrow-up'
  import ArrowUpCircle from '@svelte-parts/icons/feather/arrow-up-circle'
  import ArrowUpLeft from '@svelte-parts/icons/feather/arrow-up-left'
  import ArrowUpRight from '@svelte-parts/icons/feather/arrow-up-right'
  import AtSign from '@svelte-parts/icons/feather/at-sign'
  import Award from '@svelte-parts/icons/feather/award'
  import BarChart from '@svelte-parts/icons/feather/bar-chart'
  import BarChart2 from '@svelte-parts/icons/feather/bar-chart-2'
  import Battery from '@svelte-parts/icons/feather/battery'
  import BatteryCharging from '@svelte-parts/icons/feather/battery-charging'
  import Bell from '@svelte-parts/icons/feather/bell'
  import BellOff from '@svelte-parts/icons/feather/bell-off'
  import Bluetooth from '@svelte-parts/icons/feather/bluetooth'
  import Bold from '@svelte-parts/icons/feather/bold'
  import Book from '@svelte-parts/icons/feather/book'
  import BookOpen from '@svelte-parts/icons/feather/book-open'
  import Bookmark from '@svelte-parts/icons/feather/bookmark'
  import Box from '@svelte-parts/icons/feather/box'
  import Briefcase from '@svelte-parts/icons/feather/briefcase'
  import Calendar from '@svelte-parts/icons/feather/calendar'
  import Camera from '@svelte-parts/icons/feather/camera'
  import CameraOff from '@svelte-parts/icons/feather/camera-off'
  import Cast from '@svelte-parts/icons/feather/cast'
  import Check from '@svelte-parts/icons/feather/check'
  import CheckCircle from '@svelte-parts/icons/feather/check-circle'
  import CheckSquare from '@svelte-parts/icons/feather/check-square'
  import ChevronDown from '@svelte-parts/icons/feather/chevron-down'
  import ChevronLeft from '@svelte-parts/icons/feather/chevron-left'
  import ChevronRight from '@svelte-parts/icons/feather/chevron-right'
  import ChevronUp from '@svelte-parts/icons/feather/chevron-up'
  import ChevronsDown from '@svelte-parts/icons/feather/chevrons-down'
  import ChevronsLeft from '@svelte-parts/icons/feather/chevrons-left'
  import ChevronsRight from '@svelte-parts/icons/feather/chevrons-right'
  import ChevronsUp from '@svelte-parts/icons/feather/chevrons-up'
  import Chrome from '@svelte-parts/icons/feather/chrome'
  import Circle from '@svelte-parts/icons/feather/circle'
  import Clipboard from '@svelte-parts/icons/feather/clipboard'
  import Clock from '@svelte-parts/icons/feather/clock'
  import Cloud from '@svelte-parts/icons/feather/cloud'
  import CloudDrizzle from '@svelte-parts/icons/feather/cloud-drizzle'
  import CloudLightning from '@svelte-parts/icons/feather/cloud-lightning'
  import CloudOff from '@svelte-parts/icons/feather/cloud-off'
  import CloudRain from '@svelte-parts/icons/feather/cloud-rain'
  import CloudSnow from '@svelte-parts/icons/feather/cloud-snow'
  import Code from '@svelte-parts/icons/feather/code'
  import Codepen from '@svelte-parts/icons/feather/codepen'
  import Codesandbox from '@svelte-parts/icons/feather/codesandbox'
  import Coffee from '@svelte-parts/icons/feather/coffee'
  import Columns from '@svelte-parts/icons/feather/columns'
  import Command from '@svelte-parts/icons/feather/command'
  import Compass from '@svelte-parts/icons/feather/compass'
  import Copy from '@svelte-parts/icons/feather/copy'
  import CornerDownLeft from '@svelte-parts/icons/feather/corner-down-left'
  import CornerDownRight from '@svelte-parts/icons/feather/corner-down-right'
  import CornerLeftDown from '@svelte-parts/icons/feather/corner-left-down'
  import CornerLeftUp from '@svelte-parts/icons/feather/corner-left-up'
  import CornerRightDown from '@svelte-parts/icons/feather/corner-right-down'
  import CornerRightUp from '@svelte-parts/icons/feather/corner-right-up'
  import CornerUpLeft from '@svelte-parts/icons/feather/corner-up-left'
  import CornerUpRight from '@svelte-parts/icons/feather/corner-up-right'
  import Cpu from '@svelte-parts/icons/feather/cpu'
  import CreditCard from '@svelte-parts/icons/feather/credit-card'
  import Crop from '@svelte-parts/icons/feather/crop'
  import Crosshair from '@svelte-parts/icons/feather/crosshair'
  import Database from '@svelte-parts/icons/feather/database'
  import Delete from '@svelte-parts/icons/feather/delete'
  import Disc from '@svelte-parts/icons/feather/disc'
  import Divide from '@svelte-parts/icons/feather/divide'
  import DivideCircle from '@svelte-parts/icons/feather/divide-circle'
  import DivideSquare from '@svelte-parts/icons/feather/divide-square'
  import DollarSign from '@svelte-parts/icons/feather/dollar-sign'
  import Download from '@svelte-parts/icons/feather/download'
  import DownloadCloud from '@svelte-parts/icons/feather/download-cloud'
  import Dribbble from '@svelte-parts/icons/feather/dribbble'
  import Droplet from '@svelte-parts/icons/feather/droplet'
  import Edit from '@svelte-parts/icons/feather/edit'
  import Edit2 from '@svelte-parts/icons/feather/edit-2'
  import Edit3 from '@svelte-parts/icons/feather/edit-3'
  import ExternalLink from '@svelte-parts/icons/feather/external-link'
  import Eye from '@svelte-parts/icons/feather/eye'
  import EyeOff from '@svelte-parts/icons/feather/eye-off'
  import Facebook from '@svelte-parts/icons/feather/facebook'
  import FastForward from '@svelte-parts/icons/feather/fast-forward'
  import Feather from '@svelte-parts/icons/feather/feather'
  import Figma from '@svelte-parts/icons/feather/figma'
  import File from '@svelte-parts/icons/feather/file'
  import FileMinus from '@svelte-parts/icons/feather/file-minus'
  import FilePlus from '@svelte-parts/icons/feather/file-plus'
  import FileText from '@svelte-parts/icons/feather/file-text'
  import Film from '@svelte-parts/icons/feather/film'
  import Filter from '@svelte-parts/icons/feather/filter'
  import Flag from '@svelte-parts/icons/feather/flag'
  import Folder from '@svelte-parts/icons/feather/folder'
  import FolderMinus from '@svelte-parts/icons/feather/folder-minus'
  import FolderPlus from '@svelte-parts/icons/feather/folder-plus'
  import Framer from '@svelte-parts/icons/feather/framer'
  import Frown from '@svelte-parts/icons/feather/frown'
  import Gift from '@svelte-parts/icons/feather/gift'
  import GitBranch from '@svelte-parts/icons/feather/git-branch'
  import GitCommit from '@svelte-parts/icons/feather/git-commit'
  import GitMerge from '@svelte-parts/icons/feather/git-merge'
  import GitPullRequest from '@svelte-parts/icons/feather/git-pull-request'
  import Github from '@svelte-parts/icons/feather/github'
  import Gitlab from '@svelte-parts/icons/feather/gitlab'
  import Globe from '@svelte-parts/icons/feather/globe'
  import Grid from '@svelte-parts/icons/feather/grid'
  import HardDrive from '@svelte-parts/icons/feather/hard-drive'
  import Hash from '@svelte-parts/icons/feather/hash'
  import Headphones from '@svelte-parts/icons/feather/headphones'
  import Heart from '@svelte-parts/icons/feather/heart'
  import HelpCircle from '@svelte-parts/icons/feather/help-circle'
  import Hexagon from '@svelte-parts/icons/feather/hexagon'
  import Home from '@svelte-parts/icons/feather/home'
  import Image from '@svelte-parts/icons/feather/image'
  import Inbox from '@svelte-parts/icons/feather/inbox'
  import Info from '@svelte-parts/icons/feather/info'
  import Instagram from '@svelte-parts/icons/feather/instagram'
  import Italic from '@svelte-parts/icons/feather/italic'
  import Key from '@svelte-parts/icons/feather/key'
  import Layers from '@svelte-parts/icons/feather/layers'
  import Layout from '@svelte-parts/icons/feather/layout'
  import LifeBuoy from '@svelte-parts/icons/feather/life-buoy'
  import Link from '@svelte-parts/icons/feather/link'
  import Link2 from '@svelte-parts/icons/feather/link-2'
  import Linkedin from '@svelte-parts/icons/feather/linkedin'
  import List from '@svelte-parts/icons/feather/list'
  import Loader from '@svelte-parts/icons/feather/loader'
  import Lock from '@svelte-parts/icons/feather/lock'
  import LogIn from '@svelte-parts/icons/feather/log-in'
  import LogOut from '@svelte-parts/icons/feather/log-out'
  import Mail from '@svelte-parts/icons/feather/mail'
  import Map from '@svelte-parts/icons/feather/map'
  import MapPin from '@svelte-parts/icons/feather/map-pin'
  import Maximize from '@svelte-parts/icons/feather/maximize'
  import Maximize2 from '@svelte-parts/icons/feather/maximize-2'
  import Meh from '@svelte-parts/icons/feather/meh'
  import Menu from '@svelte-parts/icons/feather/menu'
  import MessageCircle from '@svelte-parts/icons/feather/message-circle'
  import MessageSquare from '@svelte-parts/icons/feather/message-square'
  import Mic from '@svelte-parts/icons/feather/mic'
  import MicOff from '@svelte-parts/icons/feather/mic-off'
  import Minimize from '@svelte-parts/icons/feather/minimize'
  import Minimize2 from '@svelte-parts/icons/feather/minimize-2'
  import Minus from '@svelte-parts/icons/feather/minus'
  import MinusCircle from '@svelte-parts/icons/feather/minus-circle'
  import MinusSquare from '@svelte-parts/icons/feather/minus-square'
  import Monitor from '@svelte-parts/icons/feather/monitor'
  import Moon from '@svelte-parts/icons/feather/moon'
  import MoreHorizontal from '@svelte-parts/icons/feather/more-horizontal'
  import MoreVertical from '@svelte-parts/icons/feather/more-vertical'
  import MousePointer from '@svelte-parts/icons/feather/mouse-pointer'
  import Move from '@svelte-parts/icons/feather/move'
  import Music from '@svelte-parts/icons/feather/music'
  import Navigation from '@svelte-parts/icons/feather/navigation'
  import Navigation2 from '@svelte-parts/icons/feather/navigation-2'
  import Octagon from '@svelte-parts/icons/feather/octagon'
  import Package from '@svelte-parts/icons/feather/package'
  import Paperclip from '@svelte-parts/icons/feather/paperclip'
  import Pause from '@svelte-parts/icons/feather/pause'
  import PauseCircle from '@svelte-parts/icons/feather/pause-circle'
  import PenTool from '@svelte-parts/icons/feather/pen-tool'
  import Percent from '@svelte-parts/icons/feather/percent'
  import Phone from '@svelte-parts/icons/feather/phone'
  import PhoneCall from '@svelte-parts/icons/feather/phone-call'
  import PhoneForwarded from '@svelte-parts/icons/feather/phone-forwarded'
  import PhoneIncoming from '@svelte-parts/icons/feather/phone-incoming'
  import PhoneMissed from '@svelte-parts/icons/feather/phone-missed'
  import PhoneOff from '@svelte-parts/icons/feather/phone-off'
  import PhoneOutgoing from '@svelte-parts/icons/feather/phone-outgoing'
  import PieChart from '@svelte-parts/icons/feather/pie-chart'
  import Play from '@svelte-parts/icons/feather/play'
  import PlayCircle from '@svelte-parts/icons/feather/play-circle'
  import Plus from '@svelte-parts/icons/feather/plus'
  import PlusCircle from '@svelte-parts/icons/feather/plus-circle'
  import PlusSquare from '@svelte-parts/icons/feather/plus-square'
  import Pocket from '@svelte-parts/icons/feather/pocket'
  import Power from '@svelte-parts/icons/feather/power'
  import Printer from '@svelte-parts/icons/feather/printer'
  import Radio from '@svelte-parts/icons/feather/radio'
  import RefreshCcw from '@svelte-parts/icons/feather/refresh-ccw'
  import RefreshCw from '@svelte-parts/icons/feather/refresh-cw'
  import Repeat from '@svelte-parts/icons/feather/repeat'
  import Rewind from '@svelte-parts/icons/feather/rewind'
  import RotateCcw from '@svelte-parts/icons/feather/rotate-ccw'
  import RotateCw from '@svelte-parts/icons/feather/rotate-cw'
  import Rss from '@svelte-parts/icons/feather/rss'
  import Save from '@svelte-parts/icons/feather/save'
  import Scissors from '@svelte-parts/icons/feather/scissors'
  import Search from '@svelte-parts/icons/feather/search'
  import Send from '@svelte-parts/icons/feather/send'
  import Server from '@svelte-parts/icons/feather/server'
  import Settings from '@svelte-parts/icons/feather/settings'
  import Share from '@svelte-parts/icons/feather/share'
  import Share2 from '@svelte-parts/icons/feather/share-2'
  import Shield from '@svelte-parts/icons/feather/shield'
  import ShieldOff from '@svelte-parts/icons/feather/shield-off'
  import ShoppingBag from '@svelte-parts/icons/feather/shopping-bag'
  import ShoppingCart from '@svelte-parts/icons/feather/shopping-cart'
  import Shuffle from '@svelte-parts/icons/feather/shuffle'
  import Sidebar from '@svelte-parts/icons/feather/sidebar'
  import SkipBack from '@svelte-parts/icons/feather/skip-back'
  import SkipForward from '@svelte-parts/icons/feather/skip-forward'
  import Slack from '@svelte-parts/icons/feather/slack'
  import Slash from '@svelte-parts/icons/feather/slash'
  import Sliders from '@svelte-parts/icons/feather/sliders'
  import Smartphone from '@svelte-parts/icons/feather/smartphone'
  import Smile from '@svelte-parts/icons/feather/smile'
  import Speaker from '@svelte-parts/icons/feather/speaker'
  import Square from '@svelte-parts/icons/feather/square'
  import Star from '@svelte-parts/icons/feather/star'
  import StopCircle from '@svelte-parts/icons/feather/stop-circle'
  import Sun from '@svelte-parts/icons/feather/sun'
  import Sunrise from '@svelte-parts/icons/feather/sunrise'
  import Sunset from '@svelte-parts/icons/feather/sunset'
  import Tablet from '@svelte-parts/icons/feather/tablet'
  import Tag from '@svelte-parts/icons/feather/tag'
  import Target from '@svelte-parts/icons/feather/target'
  import Terminal from '@svelte-parts/icons/feather/terminal'
  import Thermometer from '@svelte-parts/icons/feather/thermometer'
  import ThumbsDown from '@svelte-parts/icons/feather/thumbs-down'
  import ThumbsUp from '@svelte-parts/icons/feather/thumbs-up'
  import ToggleLeft from '@svelte-parts/icons/feather/toggle-left'
  import ToggleRight from '@svelte-parts/icons/feather/toggle-right'
  import Tool from '@svelte-parts/icons/feather/tool'
  import Trash from '@svelte-parts/icons/feather/trash'
  import Trash2 from '@svelte-parts/icons/feather/trash-2'
  import Trello from '@svelte-parts/icons/feather/trello'
  import TrendingDown from '@svelte-parts/icons/feather/trending-down'
  import TrendingUp from '@svelte-parts/icons/feather/trending-up'
  import Triangle from '@svelte-parts/icons/feather/triangle'
  import Truck from '@svelte-parts/icons/feather/truck'
  import Tv from '@svelte-parts/icons/feather/tv'
  import Twitch from '@svelte-parts/icons/feather/twitch'
  import Twitter from '@svelte-parts/icons/feather/twitter'
  import Type from '@svelte-parts/icons/feather/type'
  import Umbrella from '@svelte-parts/icons/feather/umbrella'
  import Underline from '@svelte-parts/icons/feather/underline'
  import Unlock from '@svelte-parts/icons/feather/unlock'
  import Upload from '@svelte-parts/icons/feather/upload'
  import UploadCloud from '@svelte-parts/icons/feather/upload-cloud'
  import User from '@svelte-parts/icons/feather/user'
  import UserCheck from '@svelte-parts/icons/feather/user-check'
  import UserMinus from '@svelte-parts/icons/feather/user-minus'
  import UserPlus from '@svelte-parts/icons/feather/user-plus'
  import UserX from '@svelte-parts/icons/feather/user-x'
  import Users from '@svelte-parts/icons/feather/users'
  import Video from '@svelte-parts/icons/feather/video'
  import VideoOff from '@svelte-parts/icons/feather/video-off'
  import Voicemail from '@svelte-parts/icons/feather/voicemail'
  import Volume from '@svelte-parts/icons/feather/volume'
  import Volume1 from '@svelte-parts/icons/feather/volume-1'
  import Volume2 from '@svelte-parts/icons/feather/volume-2'
  import VolumeX from '@svelte-parts/icons/feather/volume-x'
  import Watch from '@svelte-parts/icons/feather/watch'
  import Wifi from '@svelte-parts/icons/feather/wifi'
  import WifiOff from '@svelte-parts/icons/feather/wifi-off'
  import Wind from '@svelte-parts/icons/feather/wind'
  import X from '@svelte-parts/icons/feather/x'
  import XCircle from '@svelte-parts/icons/feather/x-circle'
  import XOctagon from '@svelte-parts/icons/feather/x-octagon'
  import XSquare from '@svelte-parts/icons/feather/x-square'
  import Youtube from '@svelte-parts/icons/feather/youtube'
  import Zap from '@svelte-parts/icons/feather/zap'
  import ZapOff from '@svelte-parts/icons/feather/zap-off'
  import ZoomIn from '@svelte-parts/icons/feather/zoom-in'
  import ZoomOut from '@svelte-parts/icons/feather/zoom-out'
  export let name = ''
</script>

<div>
  {#if name === 'activity'}
    <Activity inline={false}/>
  {/if}
  {#if name === 'airplay'}
    <Airplay inline={false}/>
  {/if}
  {#if name === 'alert-circle'}
    <AlertCircle inline={false}/>
  {/if}
  {#if name === 'alert-octagon'}
    <AlertOctagon inline={false}/>
  {/if}
  {#if name === 'alert-triangle'}
    <AlertTriangle inline={false}/>
  {/if}
  {#if name === 'align-center'}
    <AlignCenter inline={false}/>
  {/if}
  {#if name === 'align-justify'}
    <AlignJustify inline={false}/>
  {/if}
  {#if name === 'align-left'}
    <AlignLeft inline={false}/>
  {/if}
  {#if name === 'align-right'}
    <AlignRight inline={false}/>
  {/if}
  {#if name === 'anchor'}
    <Anchor inline={false}/>
  {/if}
  {#if name === 'aperture'}
    <Aperture inline={false}/>
  {/if}
  {#if name === 'archive'}
    <Archive inline={false}/>
  {/if}
  {#if name === 'arrow-down'}
    <ArrowDown inline={false}/>
  {/if}
  {#if name === 'arrow-down-circle'}
    <ArrowDownCircle inline={false}/>
  {/if}
  {#if name === 'arrow-down-left'}
    <ArrowDownLeft inline={false}/>
  {/if}
  {#if name === 'arrow-down-right'}
    <ArrowDownRight inline={false}/>
  {/if}
  {#if name === 'arrow-left'}
    <ArrowLeft inline={false}/>
  {/if}
  {#if name === 'arrow-left-circle'}
    <ArrowLeftCircle inline={false}/>
  {/if}
  {#if name === 'arrow-right'}
    <ArrowRight inline={false}/>
  {/if}
  {#if name === 'arrow-right-circle'}
    <ArrowRightCircle inline={false}/>
  {/if}
  {#if name === 'arrow-up'}
    <ArrowUp inline={false}/>
  {/if}
  {#if name === 'arrow-up-circle'}
    <ArrowUpCircle inline={false}/>
  {/if}
  {#if name === 'arrow-up-left'}
    <ArrowUpLeft inline={false}/>
  {/if}
  {#if name === 'arrow-up-right'}
    <ArrowUpRight inline={false}/>
  {/if}
  {#if name === 'at-sign'}
    <AtSign inline={false}/>
  {/if}
  {#if name === 'award'}
    <Award inline={false}/>
  {/if}
  {#if name === 'bar-chart'}
    <BarChart inline={false}/>
  {/if}
  {#if name === 'bar-chart-2'}
    <BarChart2 inline={false}/>
  {/if}
  {#if name === 'battery'}
    <Battery inline={false}/>
  {/if}
  {#if name === 'battery-charging'}
    <BatteryCharging inline={false}/>
  {/if}
  {#if name === 'bell'}
    <Bell inline={false}/>
  {/if}
  {#if name === 'bell-off'}
    <BellOff inline={false}/>
  {/if}
  {#if name === 'bluetooth'}
    <Bluetooth inline={false}/>
  {/if}
  {#if name === 'bold'}
    <Bold inline={false}/>
  {/if}
  {#if name === 'book'}
    <Book inline={false}/>
  {/if}
  {#if name === 'book-open'}
    <BookOpen inline={false}/>
  {/if}
  {#if name === 'bookmark'}
    <Bookmark inline={false}/>
  {/if}
  {#if name === 'box'}
    <Box inline={false}/>
  {/if}
  {#if name === 'briefcase'}
    <Briefcase inline={false}/>
  {/if}
  {#if name === 'calendar'}
    <Calendar inline={false}/>
  {/if}
  {#if name === 'camera'}
    <Camera inline={false}/>
  {/if}
  {#if name === 'camera-off'}
    <CameraOff inline={false}/>
  {/if}
  {#if name === 'cast'}
    <Cast inline={false}/>
  {/if}
  {#if name === 'check'}
    <Check inline={false}/>
  {/if}
  {#if name === 'check-circle'}
    <CheckCircle inline={false}/>
  {/if}
  {#if name === 'check-square'}
    <CheckSquare inline={false}/>
  {/if}
  {#if name === 'chevron-down'}
    <ChevronDown inline={false}/>
  {/if}
  {#if name === 'chevron-left'}
    <ChevronLeft inline={false}/>
  {/if}
  {#if name === 'chevron-right'}
    <ChevronRight inline={false}/>
  {/if}
  {#if name === 'chevron-up'}
    <ChevronUp inline={false}/>
  {/if}
  {#if name === 'chevrons-down'}
    <ChevronsDown inline={false}/>
  {/if}
  {#if name === 'chevrons-left'}
    <ChevronsLeft inline={false}/>
  {/if}
  {#if name === 'chevrons-right'}
    <ChevronsRight inline={false}/>
  {/if}
  {#if name === 'chevrons-up'}
    <ChevronsUp inline={false}/>
  {/if}
  {#if name === 'chrome'}
    <Chrome inline={false}/>
  {/if}
  {#if name === 'circle'}
    <Circle inline={false}/>
  {/if}
  {#if name === 'clipboard'}
    <Clipboard inline={false}/>
  {/if}
  {#if name === 'clock'}
    <Clock inline={false}/>
  {/if}
  {#if name === 'cloud'}
    <Cloud inline={false}/>
  {/if}
  {#if name === 'cloud-drizzle'}
    <CloudDrizzle inline={false}/>
  {/if}
  {#if name === 'cloud-lightning'}
    <CloudLightning inline={false}/>
  {/if}
  {#if name === 'cloud-off'}
    <CloudOff inline={false}/>
  {/if}
  {#if name === 'cloud-rain'}
    <CloudRain inline={false}/>
  {/if}
  {#if name === 'cloud-snow'}
    <CloudSnow inline={false}/>
  {/if}
  {#if name === 'code'}
    <Code inline={false}/>
  {/if}
  {#if name === 'codepen'}
    <Codepen inline={false}/>
  {/if}
  {#if name === 'codesandbox'}
    <Codesandbox inline={false}/>
  {/if}
  {#if name === 'coffee'}
    <Coffee inline={false}/>
  {/if}
  {#if name === 'columns'}
    <Columns inline={false}/>
  {/if}
  {#if name === 'command'}
    <Command inline={false}/>
  {/if}
  {#if name === 'compass'}
    <Compass inline={false}/>
  {/if}
  {#if name === 'copy'}
    <Copy inline={false}/>
  {/if}
  {#if name === 'corner-down-left'}
    <CornerDownLeft inline={false}/>
  {/if}
  {#if name === 'corner-down-right'}
    <CornerDownRight inline={false}/>
  {/if}
  {#if name === 'corner-left-down'}
    <CornerLeftDown inline={false}/>
  {/if}
  {#if name === 'corner-left-up'}
    <CornerLeftUp inline={false}/>
  {/if}
  {#if name === 'corner-right-down'}
    <CornerRightDown inline={false}/>
  {/if}
  {#if name === 'corner-right-up'}
    <CornerRightUp inline={false}/>
  {/if}
  {#if name === 'corner-up-left'}
    <CornerUpLeft inline={false}/>
  {/if}
  {#if name === 'corner-up-right'}
    <CornerUpRight inline={false}/>
  {/if}
  {#if name === 'cpu'}
    <Cpu inline={false}/>
  {/if}
  {#if name === 'credit-card'}
    <CreditCard inline={false}/>
  {/if}
  {#if name === 'crop'}
    <Crop inline={false}/>
  {/if}
  {#if name === 'crosshair'}
    <Crosshair inline={false}/>
  {/if}
  {#if name === 'database'}
    <Database inline={false}/>
  {/if}
  {#if name === 'delete'}
    <Delete inline={false}/>
  {/if}
  {#if name === 'disc'}
    <Disc inline={false}/>
  {/if}
  {#if name === 'divide'}
    <Divide inline={false}/>
  {/if}
  {#if name === 'divide-circle'}
    <DivideCircle inline={false}/>
  {/if}
  {#if name === 'divide-square'}
    <DivideSquare inline={false}/>
  {/if}
  {#if name === 'dollar-sign'}
    <DollarSign inline={false}/>
  {/if}
  {#if name === 'download'}
    <Download inline={false}/>
  {/if}
  {#if name === 'download-cloud'}
    <DownloadCloud inline={false}/>
  {/if}
  {#if name === 'dribbble'}
    <Dribbble inline={false}/>
  {/if}
  {#if name === 'droplet'}
    <Droplet inline={false}/>
  {/if}
  {#if name === 'edit'}
    <Edit inline={false}/>
  {/if}
  {#if name === 'edit-2'}
    <Edit2 inline={false}/>
  {/if}
  {#if name === 'edit-3'}
    <Edit3 inline={false}/>
  {/if}
  {#if name === 'external-link'}
    <ExternalLink inline={false}/>
  {/if}
  {#if name === 'eye'}
    <Eye inline={false}/>
  {/if}
  {#if name === 'eye-off'}
    <EyeOff inline={false}/>
  {/if}
  {#if name === 'facebook'}
    <Facebook inline={false}/>
  {/if}
  {#if name === 'fast-forward'}
    <FastForward inline={false}/>
  {/if}
  {#if name === 'feather'}
    <Feather inline={false}/>
  {/if}
  {#if name === 'figma'}
    <Figma inline={false}/>
  {/if}
  {#if name === 'file'}
    <File inline={false}/>
  {/if}
  {#if name === 'file-minus'}
    <FileMinus inline={false}/>
  {/if}
  {#if name === 'file-plus'}
    <FilePlus inline={false}/>
  {/if}
  {#if name === 'file-text'}
    <FileText inline={false}/>
  {/if}
  {#if name === 'film'}
    <Film inline={false}/>
  {/if}
  {#if name === 'filter'}
    <Filter inline={false}/>
  {/if}
  {#if name === 'flag'}
    <Flag inline={false}/>
  {/if}
  {#if name === 'folder'}
    <Folder inline={false}/>
  {/if}
  {#if name === 'folder-minus'}
    <FolderMinus inline={false}/>
  {/if}
  {#if name === 'folder-plus'}
    <FolderPlus inline={false}/>
  {/if}
  {#if name === 'framer'}
    <Framer inline={false}/>
  {/if}
  {#if name === 'frown'}
    <Frown inline={false}/>
  {/if}
  {#if name === 'gift'}
    <Gift inline={false}/>
  {/if}
  {#if name === 'git-branch'}
    <GitBranch inline={false}/>
  {/if}
  {#if name === 'git-commit'}
    <GitCommit inline={false}/>
  {/if}
  {#if name === 'git-merge'}
    <GitMerge inline={false}/>
  {/if}
  {#if name === 'git-pull-request'}
    <GitPullRequest inline={false}/>
  {/if}
  {#if name === 'github'}
    <Github inline={false}/>
  {/if}
  {#if name === 'gitlab'}
    <Gitlab inline={false}/>
  {/if}
  {#if name === 'globe'}
    <Globe inline={false}/>
  {/if}
  {#if name === 'grid'}
    <Grid inline={false}/>
  {/if}
  {#if name === 'hard-drive'}
    <HardDrive inline={false}/>
  {/if}
  {#if name === 'hash'}
    <Hash inline={false}/>
  {/if}
  {#if name === 'headphones'}
    <Headphones inline={false}/>
  {/if}
  {#if name === 'heart'}
    <Heart inline={false}/>
  {/if}
  {#if name === 'help-circle'}
    <HelpCircle inline={false}/>
  {/if}
  {#if name === 'hexagon'}
    <Hexagon inline={false}/>
  {/if}
  {#if name === 'home'}
    <Home inline={false}/>
  {/if}
  {#if name === 'image'}
    <Image inline={false}/>
  {/if}
  {#if name === 'inbox'}
    <Inbox inline={false}/>
  {/if}
  {#if name === 'info'}
    <Info inline={false}/>
  {/if}
  {#if name === 'instagram'}
    <Instagram inline={false}/>
  {/if}
  {#if name === 'italic'}
    <Italic inline={false}/>
  {/if}
  {#if name === 'key'}
    <Key inline={false}/>
  {/if}
  {#if name === 'layers'}
    <Layers inline={false}/>
  {/if}
  {#if name === 'layout'}
    <Layout inline={false}/>
  {/if}
  {#if name === 'life-buoy'}
    <LifeBuoy inline={false}/>
  {/if}
  {#if name === 'link'}
    <Link inline={false}/>
  {/if}
  {#if name === 'link-2'}
    <Link2 inline={false}/>
  {/if}
  {#if name === 'linkedin'}
    <Linkedin inline={false}/>
  {/if}
  {#if name === 'list'}
    <List inline={false}/>
  {/if}
  {#if name === 'loader'}
    <Loader inline={false}/>
  {/if}
  {#if name === 'lock'}
    <Lock inline={false}/>
  {/if}
  {#if name === 'log-in'}
    <LogIn inline={false}/>
  {/if}
  {#if name === 'log-out'}
    <LogOut inline={false}/>
  {/if}
  {#if name === 'mail'}
    <Mail inline={false}/>
  {/if}
  {#if name === 'map'}
    <Map inline={false}/>
  {/if}
  {#if name === 'map-pin'}
    <MapPin inline={false}/>
  {/if}
  {#if name === 'maximize'}
    <Maximize inline={false}/>
  {/if}
  {#if name === 'maximize-2'}
    <Maximize2 inline={false}/>
  {/if}
  {#if name === 'meh'}
    <Meh inline={false}/>
  {/if}
  {#if name === 'menu'}
    <Menu inline={false}/>
  {/if}
  {#if name === 'message-circle'}
    <MessageCircle inline={false}/>
  {/if}
  {#if name === 'message-square'}
    <MessageSquare inline={false}/>
  {/if}
  {#if name === 'mic'}
    <Mic inline={false}/>
  {/if}
  {#if name === 'mic-off'}
    <MicOff inline={false}/>
  {/if}
  {#if name === 'minimize'}
    <Minimize inline={false}/>
  {/if}
  {#if name === 'minimize-2'}
    <Minimize2 inline={false}/>
  {/if}
  {#if name === 'minus'}
    <Minus inline={false}/>
  {/if}
  {#if name === 'minus-circle'}
    <MinusCircle inline={false}/>
  {/if}
  {#if name === 'minus-square'}
    <MinusSquare inline={false}/>
  {/if}
  {#if name === 'monitor'}
    <Monitor inline={false}/>
  {/if}
  {#if name === 'moon'}
    <Moon inline={false}/>
  {/if}
  {#if name === 'more-horizontal'}
    <MoreHorizontal inline={false}/>
  {/if}
  {#if name === 'more-vertical'}
    <MoreVertical inline={false}/>
  {/if}
  {#if name === 'mouse-pointer'}
    <MousePointer inline={false}/>
  {/if}
  {#if name === 'move'}
    <Move inline={false}/>
  {/if}
  {#if name === 'music'}
    <Music inline={false}/>
  {/if}
  {#if name === 'navigation'}
    <Navigation inline={false}/>
  {/if}
  {#if name === 'navigation-2'}
    <Navigation2 inline={false}/>
  {/if}
  {#if name === 'octagon'}
    <Octagon inline={false}/>
  {/if}
  {#if name === 'package'}
    <Package inline={false}/>
  {/if}
  {#if name === 'paperclip'}
    <Paperclip inline={false}/>
  {/if}
  {#if name === 'pause'}
    <Pause inline={false}/>
  {/if}
  {#if name === 'pause-circle'}
    <PauseCircle inline={false}/>
  {/if}
  {#if name === 'pen-tool'}
    <PenTool inline={false}/>
  {/if}
  {#if name === 'percent'}
    <Percent inline={false}/>
  {/if}
  {#if name === 'phone'}
    <Phone inline={false}/>
  {/if}
  {#if name === 'phone-call'}
    <PhoneCall inline={false}/>
  {/if}
  {#if name === 'phone-forwarded'}
    <PhoneForwarded inline={false}/>
  {/if}
  {#if name === 'phone-incoming'}
    <PhoneIncoming inline={false}/>
  {/if}
  {#if name === 'phone-missed'}
    <PhoneMissed inline={false}/>
  {/if}
  {#if name === 'phone-off'}
    <PhoneOff inline={false}/>
  {/if}
  {#if name === 'phone-outgoing'}
    <PhoneOutgoing inline={false}/>
  {/if}
  {#if name === 'pie-chart'}
    <PieChart inline={false}/>
  {/if}
  {#if name === 'play'}
    <Play inline={false}/>
  {/if}
  {#if name === 'play-circle'}
    <PlayCircle inline={false}/>
  {/if}
  {#if name === 'plus'}
    <Plus inline={false}/>
  {/if}
  {#if name === 'plus-circle'}
    <PlusCircle inline={false}/>
  {/if}
  {#if name === 'plus-square'}
    <PlusSquare inline={false}/>
  {/if}
  {#if name === 'pocket'}
    <Pocket inline={false}/>
  {/if}
  {#if name === 'power'}
    <Power inline={false}/>
  {/if}
  {#if name === 'printer'}
    <Printer inline={false}/>
  {/if}
  {#if name === 'radio'}
    <Radio inline={false}/>
  {/if}
  {#if name === 'refresh-ccw'}
    <RefreshCcw inline={false}/>
  {/if}
  {#if name === 'refresh-cw'}
    <RefreshCw inline={false}/>
  {/if}
  {#if name === 'repeat'}
    <Repeat inline={false}/>
  {/if}
  {#if name === 'rewind'}
    <Rewind inline={false}/>
  {/if}
  {#if name === 'rotate-ccw'}
    <RotateCcw inline={false}/>
  {/if}
  {#if name === 'rotate-cw'}
    <RotateCw inline={false}/>
  {/if}
  {#if name === 'rss'}
    <Rss inline={false}/>
  {/if}
  {#if name === 'save'}
    <Save inline={false}/>
  {/if}
  {#if name === 'scissors'}
    <Scissors inline={false}/>
  {/if}
  {#if name === 'search'}
    <Search inline={false}/>
  {/if}
  {#if name === 'send'}
    <Send inline={false}/>
  {/if}
  {#if name === 'server'}
    <Server inline={false}/>
  {/if}
  {#if name === 'settings'}
    <Settings inline={false}/>
  {/if}
  {#if name === 'share'}
    <Share inline={false}/>
  {/if}
  {#if name === 'share-2'}
    <Share2 inline={false}/>
  {/if}
  {#if name === 'shield'}
    <Shield inline={false}/>
  {/if}
  {#if name === 'shield-off'}
    <ShieldOff inline={false}/>
  {/if}
  {#if name === 'shopping-bag'}
    <ShoppingBag inline={false}/>
  {/if}
  {#if name === 'shopping-cart'}
    <ShoppingCart inline={false}/>
  {/if}
  {#if name === 'shuffle'}
    <Shuffle inline={false}/>
  {/if}
  {#if name === 'sidebar'}
    <Sidebar inline={false}/>
  {/if}
  {#if name === 'skip-back'}
    <SkipBack inline={false}/>
  {/if}
  {#if name === 'skip-forward'}
    <SkipForward inline={false}/>
  {/if}
  {#if name === 'slack'}
    <Slack inline={false}/>
  {/if}
  {#if name === 'slash'}
    <Slash inline={false}/>
  {/if}
  {#if name === 'sliders'}
    <Sliders inline={false}/>
  {/if}
  {#if name === 'smartphone'}
    <Smartphone inline={false}/>
  {/if}
  {#if name === 'smile'}
    <Smile inline={false}/>
  {/if}
  {#if name === 'speaker'}
    <Speaker inline={false}/>
  {/if}
  {#if name === 'square'}
    <Square inline={false}/>
  {/if}
  {#if name === 'star'}
    <Star inline={false}/>
  {/if}
  {#if name === 'stop-circle'}
    <StopCircle inline={false}/>
  {/if}
  {#if name === 'sun'}
    <Sun inline={false}/>
  {/if}
  {#if name === 'sunrise'}
    <Sunrise inline={false}/>
  {/if}
  {#if name === 'sunset'}
    <Sunset inline={false}/>
  {/if}
  {#if name === 'tablet'}
    <Tablet inline={false}/>
  {/if}
  {#if name === 'tag'}
    <Tag inline={false}/>
  {/if}
  {#if name === 'target'}
    <Target inline={false}/>
  {/if}
  {#if name === 'terminal'}
    <Terminal inline={false}/>
  {/if}
  {#if name === 'thermometer'}
    <Thermometer inline={false}/>
  {/if}
  {#if name === 'thumbs-down'}
    <ThumbsDown inline={false}/>
  {/if}
  {#if name === 'thumbs-up'}
    <ThumbsUp inline={false}/>
  {/if}
  {#if name === 'toggle-left'}
    <ToggleLeft inline={false}/>
  {/if}
  {#if name === 'toggle-right'}
    <ToggleRight inline={false}/>
  {/if}
  {#if name === 'tool'}
    <Tool inline={false}/>
  {/if}
  {#if name === 'trash'}
    <Trash inline={false}/>
  {/if}
  {#if name === 'trash-2'}
    <Trash2 inline={false}/>
  {/if}
  {#if name === 'trello'}
    <Trello inline={false}/>
  {/if}
  {#if name === 'trending-down'}
    <TrendingDown inline={false}/>
  {/if}
  {#if name === 'trending-up'}
    <TrendingUp inline={false}/>
  {/if}
  {#if name === 'triangle'}
    <Triangle inline={false}/>
  {/if}
  {#if name === 'truck'}
    <Truck inline={false}/>
  {/if}
  {#if name === 'tv'}
    <Tv inline={false}/>
  {/if}
  {#if name === 'twitch'}
    <Twitch inline={false}/>
  {/if}
  {#if name === 'twitter'}
    <Twitter inline={false}/>
  {/if}
  {#if name === 'type'}
    <Type inline={false}/>
  {/if}
  {#if name === 'umbrella'}
    <Umbrella inline={false}/>
  {/if}
  {#if name === 'underline'}
    <Underline inline={false}/>
  {/if}
  {#if name === 'unlock'}
    <Unlock inline={false}/>
  {/if}
  {#if name === 'upload'}
    <Upload inline={false}/>
  {/if}
  {#if name === 'upload-cloud'}
    <UploadCloud inline={false}/>
  {/if}
  {#if name === 'user'}
    <User inline={false}/>
  {/if}
  {#if name === 'user-check'}
    <UserCheck inline={false}/>
  {/if}
  {#if name === 'user-minus'}
    <UserMinus inline={false}/>
  {/if}
  {#if name === 'user-plus'}
    <UserPlus inline={false}/>
  {/if}
  {#if name === 'user-x'}
    <UserX inline={false}/>
  {/if}
  {#if name === 'users'}
    <Users inline={false}/>
  {/if}
  {#if name === 'video'}
    <Video inline={false}/>
  {/if}
  {#if name === 'video-off'}
    <VideoOff inline={false}/>
  {/if}
  {#if name === 'voicemail'}
    <Voicemail inline={false}/>
  {/if}
  {#if name === 'volume'}
    <Volume inline={false}/>
  {/if}
  {#if name === 'volume-1'}
    <Volume1 inline={false}/>
  {/if}
  {#if name === 'volume-2'}
    <Volume2 inline={false}/>
  {/if}
  {#if name === 'volume-x'}
    <VolumeX inline={false}/>
  {/if}
  {#if name === 'watch'}
    <Watch inline={false}/>
  {/if}
  {#if name === 'wifi'}
    <Wifi inline={false}/>
  {/if}
  {#if name === 'wifi-off'}
    <WifiOff inline={false}/>
  {/if}
  {#if name === 'wind'}
    <Wind inline={false}/>
  {/if}
  {#if name === 'x'}
    <X inline={false}/>
  {/if}
  {#if name === 'x-circle'}
    <XCircle inline={false}/>
  {/if}
  {#if name === 'x-octagon'}
    <XOctagon inline={false}/>
  {/if}
  {#if name === 'x-square'}
    <XSquare inline={false}/>
  {/if}
  {#if name === 'youtube'}
    <Youtube inline={false}/>
  {/if}
  {#if name === 'zap'}
    <Zap inline={false}/>
  {/if}
  {#if name === 'zap-off'}
    <ZapOff inline={false}/>
  {/if}
  {#if name === 'zoom-in'}
    <ZoomIn inline={false}/>
  {/if}
  {#if name === 'zoom-out'}
    <ZoomOut inline={false}/>
  {/if}
</div>
