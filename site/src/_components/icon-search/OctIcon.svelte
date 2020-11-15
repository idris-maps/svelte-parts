<script>
  import Alert from '@svelte-parts/icons/octicons/alert'
  import Archive from '@svelte-parts/icons/octicons/archive'
  import ArrowBoth from '@svelte-parts/icons/octicons/arrow-both'
  import ArrowDown from '@svelte-parts/icons/octicons/arrow-down'
  import ArrowDownLeft from '@svelte-parts/icons/octicons/arrow-down-left'
  import ArrowDownRight from '@svelte-parts/icons/octicons/arrow-down-right'
  import ArrowLeft from '@svelte-parts/icons/octicons/arrow-left'
  import ArrowRight from '@svelte-parts/icons/octicons/arrow-right'
  import ArrowSwitch from '@svelte-parts/icons/octicons/arrow-switch'
  import ArrowUp from '@svelte-parts/icons/octicons/arrow-up'
  import ArrowUpLeft from '@svelte-parts/icons/octicons/arrow-up-left'
  import ArrowUpRight from '@svelte-parts/icons/octicons/arrow-up-right'
  import Beaker from '@svelte-parts/icons/octicons/beaker'
  import Bell from '@svelte-parts/icons/octicons/bell'
  import BellFill from '@svelte-parts/icons/octicons/bell-fill'
  import BellSlash from '@svelte-parts/icons/octicons/bell-slash'
  import Bold from '@svelte-parts/icons/octicons/bold'
  import Book from '@svelte-parts/icons/octicons/book'
  import Bookmark from '@svelte-parts/icons/octicons/bookmark'
  import BookmarkFill from '@svelte-parts/icons/octicons/bookmark-fill'
  import BookmarkSlash from '@svelte-parts/icons/octicons/bookmark-slash'
  import BookmarkSlashFill from '@svelte-parts/icons/octicons/bookmark-slash-fill'
  import Briefcase from '@svelte-parts/icons/octicons/briefcase'
  import Broadcast from '@svelte-parts/icons/octicons/broadcast'
  import Calendar from '@svelte-parts/icons/octicons/calendar'
  import Check from '@svelte-parts/icons/octicons/check'
  import CheckCircle from '@svelte-parts/icons/octicons/check-circle'
  import CheckCircleFill from '@svelte-parts/icons/octicons/check-circle-fill'
  import Checklist from '@svelte-parts/icons/octicons/checklist'
  import ChevronDown from '@svelte-parts/icons/octicons/chevron-down'
  import ChevronLeft from '@svelte-parts/icons/octicons/chevron-left'
  import ChevronRight from '@svelte-parts/icons/octicons/chevron-right'
  import ChevronUp from '@svelte-parts/icons/octicons/chevron-up'
  import Circle from '@svelte-parts/icons/octicons/circle'
  import CircleSlash from '@svelte-parts/icons/octicons/circle-slash'
  import Clippy from '@svelte-parts/icons/octicons/clippy'
  import Clock from '@svelte-parts/icons/octicons/clock'
  import Code from '@svelte-parts/icons/octicons/code'
  import CodeReview from '@svelte-parts/icons/octicons/code-review'
  import CodeSquare from '@svelte-parts/icons/octicons/code-square'
  import Comment from '@svelte-parts/icons/octicons/comment'
  import CommentDiscussion from '@svelte-parts/icons/octicons/comment-discussion'
  import Commit from '@svelte-parts/icons/octicons/commit'
  import Container from '@svelte-parts/icons/octicons/container'
  import Copy from '@svelte-parts/icons/octicons/copy'
  import Cpu from '@svelte-parts/icons/octicons/cpu'
  import CreditCard from '@svelte-parts/icons/octicons/credit-card'
  import CrossReference from '@svelte-parts/icons/octicons/cross-reference'
  import Dash from '@svelte-parts/icons/octicons/dash'
  import Database from '@svelte-parts/icons/octicons/database'
  import DesktopDownload from '@svelte-parts/icons/octicons/desktop-download'
  import DeviceCameraVideo from '@svelte-parts/icons/octicons/device-camera-video'
  import DeviceDesktop from '@svelte-parts/icons/octicons/device-desktop'
  import DeviceMobile from '@svelte-parts/icons/octicons/device-mobile'
  import Diff from '@svelte-parts/icons/octicons/diff'
  import Dot from '@svelte-parts/icons/octicons/dot'
  import DotFill from '@svelte-parts/icons/octicons/dot-fill'
  import Download from '@svelte-parts/icons/octicons/download'
  import Eye from '@svelte-parts/icons/octicons/eye'
  import EyeClosed from '@svelte-parts/icons/octicons/eye-closed'
  import File from '@svelte-parts/icons/octicons/file'
  import FileBinary from '@svelte-parts/icons/octicons/file-binary'
  import FileCode from '@svelte-parts/icons/octicons/file-code'
  import FileDiff from '@svelte-parts/icons/octicons/file-diff'
  import FileDirectory from '@svelte-parts/icons/octicons/file-directory'
  import FileDirectoryFill from '@svelte-parts/icons/octicons/file-directory-fill'
  import FileMedia from '@svelte-parts/icons/octicons/file-media'
  import FileSubmodule from '@svelte-parts/icons/octicons/file-submodule'
  import FileSymlinkFile from '@svelte-parts/icons/octicons/file-symlink-file'
  import FileZip from '@svelte-parts/icons/octicons/file-zip'
  import Filter from '@svelte-parts/icons/octicons/filter'
  import Flame from '@svelte-parts/icons/octicons/flame'
  import Fold from '@svelte-parts/icons/octicons/fold'
  import FoldDown from '@svelte-parts/icons/octicons/fold-down'
  import FoldUp from '@svelte-parts/icons/octicons/fold-up'
  import Gear from '@svelte-parts/icons/octicons/gear'
  import Gift from '@svelte-parts/icons/octicons/gift'
  import GitBranch from '@svelte-parts/icons/octicons/git-branch'
  import GitCommit from '@svelte-parts/icons/octicons/git-commit'
  import GitCompare from '@svelte-parts/icons/octicons/git-compare'
  import GitFork from '@svelte-parts/icons/octicons/git-fork'
  import GitMerge from '@svelte-parts/icons/octicons/git-merge'
  import GitPullRequest from '@svelte-parts/icons/octicons/git-pull-request'
  import Globe from '@svelte-parts/icons/octicons/globe'
  import Grabber from '@svelte-parts/icons/octicons/grabber'
  import Graph from '@svelte-parts/icons/octicons/graph'
  import Heading from '@svelte-parts/icons/octicons/heading'
  import Heart from '@svelte-parts/icons/octicons/heart'
  import HeartFill from '@svelte-parts/icons/octicons/heart-fill'
  import History from '@svelte-parts/icons/octicons/history'
  import Home from '@svelte-parts/icons/octicons/home'
  import HomeFill from '@svelte-parts/icons/octicons/home-fill'
  import HorizontalRule from '@svelte-parts/icons/octicons/horizontal-rule'
  import Hourglass from '@svelte-parts/icons/octicons/hourglass'
  import Hubot from '@svelte-parts/icons/octicons/hubot'
  import Image from '@svelte-parts/icons/octicons/image'
  import Inbox from '@svelte-parts/icons/octicons/inbox'
  import Infinity from '@svelte-parts/icons/octicons/infinity'
  import Info from '@svelte-parts/icons/octicons/info'
  import Insights from '@svelte-parts/icons/octicons/insights'
  import IssueClosed from '@svelte-parts/icons/octicons/issue-closed'
  import IssueOpened from '@svelte-parts/icons/octicons/issue-opened'
  import IssueReopened from '@svelte-parts/icons/octicons/issue-reopened'
  import Italic from '@svelte-parts/icons/octicons/italic'
  import KebabHorizontal from '@svelte-parts/icons/octicons/kebab-horizontal'
  import Key from '@svelte-parts/icons/octicons/key'
  import Law from '@svelte-parts/icons/octicons/law'
  import LightBulb from '@svelte-parts/icons/octicons/light-bulb'
  import Link from '@svelte-parts/icons/octicons/link'
  import LinkExternal from '@svelte-parts/icons/octicons/link-external'
  import ListOrdered from '@svelte-parts/icons/octicons/list-ordered'
  import ListUnordered from '@svelte-parts/icons/octicons/list-unordered'
  import Location from '@svelte-parts/icons/octicons/location'
  import Lock from '@svelte-parts/icons/octicons/lock'
  import Mail from '@svelte-parts/icons/octicons/mail'
  import Megaphone from '@svelte-parts/icons/octicons/megaphone'
  import Mention from '@svelte-parts/icons/octicons/mention'
  import Milestone from '@svelte-parts/icons/octicons/milestone'
  import Mirror from '@svelte-parts/icons/octicons/mirror'
  import Moon from '@svelte-parts/icons/octicons/moon'
  import MortarBoard from '@svelte-parts/icons/octicons/mortar-board'
  import Mute from '@svelte-parts/icons/octicons/mute'
  import NoEntry from '@svelte-parts/icons/octicons/no-entry'
  import NorthStar from '@svelte-parts/icons/octicons/north-star'
  import Note from '@svelte-parts/icons/octicons/note'
  import Octoface from '@svelte-parts/icons/octicons/octoface'
  import Organization from '@svelte-parts/icons/octicons/organization'
  import Package from '@svelte-parts/icons/octicons/package'
  import PackageDependencies from '@svelte-parts/icons/octicons/package-dependencies'
  import PackageDependents from '@svelte-parts/icons/octicons/package-dependents'
  import PaperAirplane from '@svelte-parts/icons/octicons/paper-airplane'
  import Pencil from '@svelte-parts/icons/octicons/pencil'
  import People from '@svelte-parts/icons/octicons/people'
  import Person from '@svelte-parts/icons/octicons/person'
  import Pin from '@svelte-parts/icons/octicons/pin'
  import Play from '@svelte-parts/icons/octicons/play'
  import Plug from '@svelte-parts/icons/octicons/plug'
  import Plus from '@svelte-parts/icons/octicons/plus'
  import PlusCircle from '@svelte-parts/icons/octicons/plus-circle'
  import Project from '@svelte-parts/icons/octicons/project'
  import Pulse from '@svelte-parts/icons/octicons/pulse'
  import Question from '@svelte-parts/icons/octicons/question'
  import Quote from '@svelte-parts/icons/octicons/quote'
  import Reply from '@svelte-parts/icons/octicons/reply'
  import Repo from '@svelte-parts/icons/octicons/repo'
  import RepoPush from '@svelte-parts/icons/octicons/repo-push'
  import RepoTemplate from '@svelte-parts/icons/octicons/repo-template'
  import Report from '@svelte-parts/icons/octicons/report'
  import Rocket from '@svelte-parts/icons/octicons/rocket'
  import Rss from '@svelte-parts/icons/octicons/rss'
  import Ruby from '@svelte-parts/icons/octicons/ruby'
  import ScreenFull from '@svelte-parts/icons/octicons/screen-full'
  import ScreenNormal from '@svelte-parts/icons/octicons/screen-normal'
  import Search from '@svelte-parts/icons/octicons/search'
  import Server from '@svelte-parts/icons/octicons/server'
  import Share from '@svelte-parts/icons/octicons/share'
  import ShareAndroid from '@svelte-parts/icons/octicons/share-android'
  import Shield from '@svelte-parts/icons/octicons/shield'
  import ShieldCheck from '@svelte-parts/icons/octicons/shield-check'
  import ShieldLock from '@svelte-parts/icons/octicons/shield-lock'
  import ShieldX from '@svelte-parts/icons/octicons/shield-x'
  import SignIn from '@svelte-parts/icons/octicons/sign-in'
  import SignOut from '@svelte-parts/icons/octicons/sign-out'
  import Skip from '@svelte-parts/icons/octicons/skip'
  import Smiley from '@svelte-parts/icons/octicons/smiley'
  import Square from '@svelte-parts/icons/octicons/square'
  import SquareFill from '@svelte-parts/icons/octicons/square-fill'
  import Squirrel from '@svelte-parts/icons/octicons/squirrel'
  import Star from '@svelte-parts/icons/octicons/star'
  import StarFill from '@svelte-parts/icons/octicons/star-fill'
  import Stop from '@svelte-parts/icons/octicons/stop'
  import Stopwatch from '@svelte-parts/icons/octicons/stopwatch'
  import Sun from '@svelte-parts/icons/octicons/sun'
  import Sync from '@svelte-parts/icons/octicons/sync'
  import Tab from '@svelte-parts/icons/octicons/tab'
  import Tag from '@svelte-parts/icons/octicons/tag'
  import Tasklist from '@svelte-parts/icons/octicons/tasklist'
  import Telescope from '@svelte-parts/icons/octicons/telescope'
  import Terminal from '@svelte-parts/icons/octicons/terminal'
  import Thumbsdown from '@svelte-parts/icons/octicons/thumbsdown'
  import Thumbsup from '@svelte-parts/icons/octicons/thumbsup'
  import Tools from '@svelte-parts/icons/octicons/tools'
  import Trash from '@svelte-parts/icons/octicons/trash'
  import TriangleDown from '@svelte-parts/icons/octicons/triangle-down'
  import TriangleLeft from '@svelte-parts/icons/octicons/triangle-left'
  import TriangleRight from '@svelte-parts/icons/octicons/triangle-right'
  import TriangleUp from '@svelte-parts/icons/octicons/triangle-up'
  import Typography from '@svelte-parts/icons/octicons/typography'
  import Unfold from '@svelte-parts/icons/octicons/unfold'
  import Unlock from '@svelte-parts/icons/octicons/unlock'
  import Unmute from '@svelte-parts/icons/octicons/unmute'
  import Unverified from '@svelte-parts/icons/octicons/unverified'
  import Upload from '@svelte-parts/icons/octicons/upload'
  import Verified from '@svelte-parts/icons/octicons/verified'
  import Versions from '@svelte-parts/icons/octicons/versions'
  import Workflow from '@svelte-parts/icons/octicons/workflow'
  import X from '@svelte-parts/icons/octicons/x'
  import XCircle from '@svelte-parts/icons/octicons/x-circle'
  import XCircleFill from '@svelte-parts/icons/octicons/x-circle-fill'
  import Zap from '@svelte-parts/icons/octicons/zap'
  export let name = ''
</script>

<div>
  {#if name === 'alert'}
    <Alert inline={false}/>
  {/if}
  {#if name === 'archive'}
    <Archive inline={false}/>
  {/if}
  {#if name === 'arrow-both'}
    <ArrowBoth inline={false}/>
  {/if}
  {#if name === 'arrow-down'}
    <ArrowDown inline={false}/>
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
  {#if name === 'arrow-right'}
    <ArrowRight inline={false}/>
  {/if}
  {#if name === 'arrow-switch'}
    <ArrowSwitch inline={false}/>
  {/if}
  {#if name === 'arrow-up'}
    <ArrowUp inline={false}/>
  {/if}
  {#if name === 'arrow-up-left'}
    <ArrowUpLeft inline={false}/>
  {/if}
  {#if name === 'arrow-up-right'}
    <ArrowUpRight inline={false}/>
  {/if}
  {#if name === 'beaker'}
    <Beaker inline={false}/>
  {/if}
  {#if name === 'bell'}
    <Bell inline={false}/>
  {/if}
  {#if name === 'bell-fill'}
    <BellFill inline={false}/>
  {/if}
  {#if name === 'bell-slash'}
    <BellSlash inline={false}/>
  {/if}
  {#if name === 'bold'}
    <Bold inline={false}/>
  {/if}
  {#if name === 'book'}
    <Book inline={false}/>
  {/if}
  {#if name === 'bookmark'}
    <Bookmark inline={false}/>
  {/if}
  {#if name === 'bookmark-fill'}
    <BookmarkFill inline={false}/>
  {/if}
  {#if name === 'bookmark-slash'}
    <BookmarkSlash inline={false}/>
  {/if}
  {#if name === 'bookmark-slash-fill'}
    <BookmarkSlashFill inline={false}/>
  {/if}
  {#if name === 'briefcase'}
    <Briefcase inline={false}/>
  {/if}
  {#if name === 'broadcast'}
    <Broadcast inline={false}/>
  {/if}
  {#if name === 'calendar'}
    <Calendar inline={false}/>
  {/if}
  {#if name === 'check'}
    <Check inline={false}/>
  {/if}
  {#if name === 'check-circle'}
    <CheckCircle inline={false}/>
  {/if}
  {#if name === 'check-circle-fill'}
    <CheckCircleFill inline={false}/>
  {/if}
  {#if name === 'checklist'}
    <Checklist inline={false}/>
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
  {#if name === 'circle'}
    <Circle inline={false}/>
  {/if}
  {#if name === 'circle-slash'}
    <CircleSlash inline={false}/>
  {/if}
  {#if name === 'clippy'}
    <Clippy inline={false}/>
  {/if}
  {#if name === 'clock'}
    <Clock inline={false}/>
  {/if}
  {#if name === 'code'}
    <Code inline={false}/>
  {/if}
  {#if name === 'code-review'}
    <CodeReview inline={false}/>
  {/if}
  {#if name === 'code-square'}
    <CodeSquare inline={false}/>
  {/if}
  {#if name === 'comment'}
    <Comment inline={false}/>
  {/if}
  {#if name === 'comment-discussion'}
    <CommentDiscussion inline={false}/>
  {/if}
  {#if name === 'commit'}
    <Commit inline={false}/>
  {/if}
  {#if name === 'container'}
    <Container inline={false}/>
  {/if}
  {#if name === 'copy'}
    <Copy inline={false}/>
  {/if}
  {#if name === 'cpu'}
    <Cpu inline={false}/>
  {/if}
  {#if name === 'credit-card'}
    <CreditCard inline={false}/>
  {/if}
  {#if name === 'cross-reference'}
    <CrossReference inline={false}/>
  {/if}
  {#if name === 'dash'}
    <Dash inline={false}/>
  {/if}
  {#if name === 'database'}
    <Database inline={false}/>
  {/if}
  {#if name === 'desktop-download'}
    <DesktopDownload inline={false}/>
  {/if}
  {#if name === 'device-camera-video'}
    <DeviceCameraVideo inline={false}/>
  {/if}
  {#if name === 'device-desktop'}
    <DeviceDesktop inline={false}/>
  {/if}
  {#if name === 'device-mobile'}
    <DeviceMobile inline={false}/>
  {/if}
  {#if name === 'diff'}
    <Diff inline={false}/>
  {/if}
  {#if name === 'dot'}
    <Dot inline={false}/>
  {/if}
  {#if name === 'dot-fill'}
    <DotFill inline={false}/>
  {/if}
  {#if name === 'download'}
    <Download inline={false}/>
  {/if}
  {#if name === 'eye'}
    <Eye inline={false}/>
  {/if}
  {#if name === 'eye-closed'}
    <EyeClosed inline={false}/>
  {/if}
  {#if name === 'file'}
    <File inline={false}/>
  {/if}
  {#if name === 'file-binary'}
    <FileBinary inline={false}/>
  {/if}
  {#if name === 'file-code'}
    <FileCode inline={false}/>
  {/if}
  {#if name === 'file-diff'}
    <FileDiff inline={false}/>
  {/if}
  {#if name === 'file-directory'}
    <FileDirectory inline={false}/>
  {/if}
  {#if name === 'file-directory-fill'}
    <FileDirectoryFill inline={false}/>
  {/if}
  {#if name === 'file-media'}
    <FileMedia inline={false}/>
  {/if}
  {#if name === 'file-submodule'}
    <FileSubmodule inline={false}/>
  {/if}
  {#if name === 'file-symlink-file'}
    <FileSymlinkFile inline={false}/>
  {/if}
  {#if name === 'file-zip'}
    <FileZip inline={false}/>
  {/if}
  {#if name === 'filter'}
    <Filter inline={false}/>
  {/if}
  {#if name === 'flame'}
    <Flame inline={false}/>
  {/if}
  {#if name === 'fold'}
    <Fold inline={false}/>
  {/if}
  {#if name === 'fold-down'}
    <FoldDown inline={false}/>
  {/if}
  {#if name === 'fold-up'}
    <FoldUp inline={false}/>
  {/if}
  {#if name === 'gear'}
    <Gear inline={false}/>
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
  {#if name === 'git-compare'}
    <GitCompare inline={false}/>
  {/if}
  {#if name === 'git-fork'}
    <GitFork inline={false}/>
  {/if}
  {#if name === 'git-merge'}
    <GitMerge inline={false}/>
  {/if}
  {#if name === 'git-pull-request'}
    <GitPullRequest inline={false}/>
  {/if}
  {#if name === 'globe'}
    <Globe inline={false}/>
  {/if}
  {#if name === 'grabber'}
    <Grabber inline={false}/>
  {/if}
  {#if name === 'graph'}
    <Graph inline={false}/>
  {/if}
  {#if name === 'heading'}
    <Heading inline={false}/>
  {/if}
  {#if name === 'heart'}
    <Heart inline={false}/>
  {/if}
  {#if name === 'heart-fill'}
    <HeartFill inline={false}/>
  {/if}
  {#if name === 'history'}
    <History inline={false}/>
  {/if}
  {#if name === 'home'}
    <Home inline={false}/>
  {/if}
  {#if name === 'home-fill'}
    <HomeFill inline={false}/>
  {/if}
  {#if name === 'horizontal-rule'}
    <HorizontalRule inline={false}/>
  {/if}
  {#if name === 'hourglass'}
    <Hourglass inline={false}/>
  {/if}
  {#if name === 'hubot'}
    <Hubot inline={false}/>
  {/if}
  {#if name === 'image'}
    <Image inline={false}/>
  {/if}
  {#if name === 'inbox'}
    <Inbox inline={false}/>
  {/if}
  {#if name === 'infinity'}
    <Infinity inline={false}/>
  {/if}
  {#if name === 'info'}
    <Info inline={false}/>
  {/if}
  {#if name === 'insights'}
    <Insights inline={false}/>
  {/if}
  {#if name === 'issue-closed'}
    <IssueClosed inline={false}/>
  {/if}
  {#if name === 'issue-opened'}
    <IssueOpened inline={false}/>
  {/if}
  {#if name === 'issue-reopened'}
    <IssueReopened inline={false}/>
  {/if}
  {#if name === 'italic'}
    <Italic inline={false}/>
  {/if}
  {#if name === 'kebab-horizontal'}
    <KebabHorizontal inline={false}/>
  {/if}
  {#if name === 'key'}
    <Key inline={false}/>
  {/if}
  {#if name === 'law'}
    <Law inline={false}/>
  {/if}
  {#if name === 'light-bulb'}
    <LightBulb inline={false}/>
  {/if}
  {#if name === 'link'}
    <Link inline={false}/>
  {/if}
  {#if name === 'link-external'}
    <LinkExternal inline={false}/>
  {/if}
  {#if name === 'list-ordered'}
    <ListOrdered inline={false}/>
  {/if}
  {#if name === 'list-unordered'}
    <ListUnordered inline={false}/>
  {/if}
  {#if name === 'location'}
    <Location inline={false}/>
  {/if}
  {#if name === 'lock'}
    <Lock inline={false}/>
  {/if}
  {#if name === 'mail'}
    <Mail inline={false}/>
  {/if}
  {#if name === 'megaphone'}
    <Megaphone inline={false}/>
  {/if}
  {#if name === 'mention'}
    <Mention inline={false}/>
  {/if}
  {#if name === 'milestone'}
    <Milestone inline={false}/>
  {/if}
  {#if name === 'mirror'}
    <Mirror inline={false}/>
  {/if}
  {#if name === 'moon'}
    <Moon inline={false}/>
  {/if}
  {#if name === 'mortar-board'}
    <MortarBoard inline={false}/>
  {/if}
  {#if name === 'mute'}
    <Mute inline={false}/>
  {/if}
  {#if name === 'no-entry'}
    <NoEntry inline={false}/>
  {/if}
  {#if name === 'north-star'}
    <NorthStar inline={false}/>
  {/if}
  {#if name === 'note'}
    <Note inline={false}/>
  {/if}
  {#if name === 'octoface'}
    <Octoface inline={false}/>
  {/if}
  {#if name === 'organization'}
    <Organization inline={false}/>
  {/if}
  {#if name === 'package'}
    <Package inline={false}/>
  {/if}
  {#if name === 'package-dependencies'}
    <PackageDependencies inline={false}/>
  {/if}
  {#if name === 'package-dependents'}
    <PackageDependents inline={false}/>
  {/if}
  {#if name === 'paper-airplane'}
    <PaperAirplane inline={false}/>
  {/if}
  {#if name === 'pencil'}
    <Pencil inline={false}/>
  {/if}
  {#if name === 'people'}
    <People inline={false}/>
  {/if}
  {#if name === 'person'}
    <Person inline={false}/>
  {/if}
  {#if name === 'pin'}
    <Pin inline={false}/>
  {/if}
  {#if name === 'play'}
    <Play inline={false}/>
  {/if}
  {#if name === 'plug'}
    <Plug inline={false}/>
  {/if}
  {#if name === 'plus'}
    <Plus inline={false}/>
  {/if}
  {#if name === 'plus-circle'}
    <PlusCircle inline={false}/>
  {/if}
  {#if name === 'project'}
    <Project inline={false}/>
  {/if}
  {#if name === 'pulse'}
    <Pulse inline={false}/>
  {/if}
  {#if name === 'question'}
    <Question inline={false}/>
  {/if}
  {#if name === 'quote'}
    <Quote inline={false}/>
  {/if}
  {#if name === 'reply'}
    <Reply inline={false}/>
  {/if}
  {#if name === 'repo'}
    <Repo inline={false}/>
  {/if}
  {#if name === 'repo-push'}
    <RepoPush inline={false}/>
  {/if}
  {#if name === 'repo-template'}
    <RepoTemplate inline={false}/>
  {/if}
  {#if name === 'report'}
    <Report inline={false}/>
  {/if}
  {#if name === 'rocket'}
    <Rocket inline={false}/>
  {/if}
  {#if name === 'rss'}
    <Rss inline={false}/>
  {/if}
  {#if name === 'ruby'}
    <Ruby inline={false}/>
  {/if}
  {#if name === 'screen-full'}
    <ScreenFull inline={false}/>
  {/if}
  {#if name === 'screen-normal'}
    <ScreenNormal inline={false}/>
  {/if}
  {#if name === 'search'}
    <Search inline={false}/>
  {/if}
  {#if name === 'server'}
    <Server inline={false}/>
  {/if}
  {#if name === 'share'}
    <Share inline={false}/>
  {/if}
  {#if name === 'share-android'}
    <ShareAndroid inline={false}/>
  {/if}
  {#if name === 'shield'}
    <Shield inline={false}/>
  {/if}
  {#if name === 'shield-check'}
    <ShieldCheck inline={false}/>
  {/if}
  {#if name === 'shield-lock'}
    <ShieldLock inline={false}/>
  {/if}
  {#if name === 'shield-x'}
    <ShieldX inline={false}/>
  {/if}
  {#if name === 'sign-in'}
    <SignIn inline={false}/>
  {/if}
  {#if name === 'sign-out'}
    <SignOut inline={false}/>
  {/if}
  {#if name === 'skip'}
    <Skip inline={false}/>
  {/if}
  {#if name === 'smiley'}
    <Smiley inline={false}/>
  {/if}
  {#if name === 'square'}
    <Square inline={false}/>
  {/if}
  {#if name === 'square-fill'}
    <SquareFill inline={false}/>
  {/if}
  {#if name === 'squirrel'}
    <Squirrel inline={false}/>
  {/if}
  {#if name === 'star'}
    <Star inline={false}/>
  {/if}
  {#if name === 'star-fill'}
    <StarFill inline={false}/>
  {/if}
  {#if name === 'stop'}
    <Stop inline={false}/>
  {/if}
  {#if name === 'stopwatch'}
    <Stopwatch inline={false}/>
  {/if}
  {#if name === 'sun'}
    <Sun inline={false}/>
  {/if}
  {#if name === 'sync'}
    <Sync inline={false}/>
  {/if}
  {#if name === 'tab'}
    <Tab inline={false}/>
  {/if}
  {#if name === 'tag'}
    <Tag inline={false}/>
  {/if}
  {#if name === 'tasklist'}
    <Tasklist inline={false}/>
  {/if}
  {#if name === 'telescope'}
    <Telescope inline={false}/>
  {/if}
  {#if name === 'terminal'}
    <Terminal inline={false}/>
  {/if}
  {#if name === 'thumbsdown'}
    <Thumbsdown inline={false}/>
  {/if}
  {#if name === 'thumbsup'}
    <Thumbsup inline={false}/>
  {/if}
  {#if name === 'tools'}
    <Tools inline={false}/>
  {/if}
  {#if name === 'trash'}
    <Trash inline={false}/>
  {/if}
  {#if name === 'triangle-down'}
    <TriangleDown inline={false}/>
  {/if}
  {#if name === 'triangle-left'}
    <TriangleLeft inline={false}/>
  {/if}
  {#if name === 'triangle-right'}
    <TriangleRight inline={false}/>
  {/if}
  {#if name === 'triangle-up'}
    <TriangleUp inline={false}/>
  {/if}
  {#if name === 'typography'}
    <Typography inline={false}/>
  {/if}
  {#if name === 'unfold'}
    <Unfold inline={false}/>
  {/if}
  {#if name === 'unlock'}
    <Unlock inline={false}/>
  {/if}
  {#if name === 'unmute'}
    <Unmute inline={false}/>
  {/if}
  {#if name === 'unverified'}
    <Unverified inline={false}/>
  {/if}
  {#if name === 'upload'}
    <Upload inline={false}/>
  {/if}
  {#if name === 'verified'}
    <Verified inline={false}/>
  {/if}
  {#if name === 'versions'}
    <Versions inline={false}/>
  {/if}
  {#if name === 'workflow'}
    <Workflow inline={false}/>
  {/if}
  {#if name === 'x'}
    <X inline={false}/>
  {/if}
  {#if name === 'x-circle'}
    <XCircle inline={false}/>
  {/if}
  {#if name === 'x-circle-fill'}
    <XCircleFill inline={false}/>
  {/if}
  {#if name === 'zap'}
    <Zap inline={false}/>
  {/if}
</div>
