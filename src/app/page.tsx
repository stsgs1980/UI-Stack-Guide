'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Area,
  AreaChart,
} from 'recharts'

// UI Components для демонстрации
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ScrollArea } from '@/components/ui/scroll-area'
import { toast } from 'sonner'
// Дополнительные компоненты
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Calendar } from '@/components/ui/calendar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

// Данные о компонентах shadcn/ui - ПОЛНЫЙ СПИСОК 49 КОМПОНЕНТОВ
const componentsData = {
  categories: [
    {
      id: 'basic',
      name: 'Базовые',
      components: [
        {
          id: 'button',
          name: 'Button',
          description: 'Кнопка с различными вариантами и размерами',
          variants: ['outline', 'secondary', 'ghost', 'destructive', 'link'],
          previewCode: `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
        },
        {
          id: 'badge',
          name: 'Badge',
          description: 'Маленький индикатор или метка',
          variants: ['secondary', 'outline', 'destructive'],
          previewCode: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,
        },
        {
          id: 'separator',
          name: 'Separator',
          description: 'Визуальный разделитель',
          variants: ['horizontal', 'vertical'],
          previewCode: `<Separator />
<Separator orientation="vertical" />`,
        },
        {
          id: 'skeleton',
          name: 'Skeleton',
          description: 'Заглушка для загрузки контента',
          variants: ['circle', 'text', 'card'],
          previewCode: `<Skeleton className="h-12 w-12 rounded-full" />
<Skeleton className="h-4 w-48" />
<Skeleton className="h-24 w-full" />`,
        },
        {
          id: 'aspect-ratio',
          name: 'Aspect Ratio',
          description: 'Контейнер с фиксированным соотношением сторон',
          variants: ['16:9', '4:3', '1:1', '21:9'],
          previewCode: `<AspectRatio ratio={16/9} className="bg-muted">
  <div>16:9</div>
</AspectRatio>`,
        },
        {
          id: 'label',
          name: 'Label',
          description: 'Метка для элементов формы',
          variants: ['standard'],
          previewCode: `<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />`,
        },
      ],
    },
    {
      id: 'forms',
      name: 'Формы',
      components: [
        {
          id: 'input',
          name: 'Input',
          description: 'Текстовое поле ввода',
          variants: ['text', 'email', 'password', 'number'],
          previewCode: `<Input placeholder="Текст" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Пароль" />`,
        },
        {
          id: 'textarea',
          name: 'Textarea',
          description: 'Многострочное текстовое поле',
          variants: ['standard', 'disabled'],
          previewCode: `<Textarea placeholder="Введите текст..." rows={4} />`,
        },
        {
          id: 'select',
          name: 'Select',
          description: 'Выпадающий список выбора',
          variants: ['standard', 'scrollable'],
          previewCode: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Выберите" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Опция 1</SelectItem>
    <SelectItem value="2">Опция 2</SelectItem>
  </SelectContent>
</Select>`,
        },
        {
          id: 'checkbox',
          name: 'Checkbox',
          description: 'Флажок выбора',
          variants: ['standard', 'disabled'],
          previewCode: `<Checkbox id="check" />
<Label htmlFor="check">Отметить</Label>`,
        },
        {
          id: 'switch',
          name: 'Switch',
          description: 'Переключатель включения/выключения',
          variants: ['standard', 'disabled'],
          previewCode: `<Switch id="switch" />
<Label htmlFor="switch">Включить</Label>`,
        },
        {
          id: 'slider',
          name: 'Slider',
          description: 'Ползунок выбора значения',
          variants: ['standard', 'range'],
          previewCode: `<Slider defaultValue={[50]} max={100} step={1} />
<Slider defaultValue={[25, 75]} max={100} />`,
        },
        {
          id: 'radio-group',
          name: 'Radio Group',
          description: 'Группа радио-кнопок',
          variants: ['standard'],
          previewCode: `<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Опция 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Опция 2</Label>
  </div>
</RadioGroup>`,
        },
        {
          id: 'form',
          name: 'Form',
          description: 'Форма с валидацией',
          variants: ['login', 'register'],
          previewCode: `<Form>
  <FormField name="email" render={() => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl><Input /></FormControl>
      <FormDescription>Введите email</FormDescription>
      <FormMessage />
    </FormItem>
  )} />
</Form>`,
        },
        {
          id: 'input-otp',
          name: 'Input OTP',
          description: 'Поле для ввода OTP кода',
          variants: ['standard'],
          previewCode: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
        },
        {
          id: 'calendar',
          name: 'Calendar',
          description: 'Календарь для выбора даты',
          variants: ['single', 'range'],
          previewCode: `<Calendar mode="single" />
<Calendar mode="range" />`,
        },
      ],
    },
    {
      id: 'feedback',
      name: 'Обратная связь',
      components: [
        {
          id: 'alert',
          name: 'Alert',
          description: 'Уведомление или предупреждение',
          variants: ['info', 'destructive'],
          previewCode: `<Alert>
  <AlertTitle>Внимание</AlertTitle>
  <AlertDescription>Важное сообщение</AlertDescription>
</Alert>
<Alert variant="destructive">
  <AlertTitle>Ошибка</AlertTitle>
  <AlertDescription>Что-то пошло не так</AlertDescription>
</Alert>`,
        },
        {
          id: 'progress',
          name: 'Progress',
          description: 'Индикатор прогресса',
          variants: ['determinate', 'indeterminate'],
          previewCode: `<Progress value={66} />
<Progress value={33} />`,
        },
        {
          id: 'tooltip',
          name: 'Tooltip',
          description: 'Всплывающая подсказка',
          variants: ['standard'],
          previewCode: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Наведи</Button>
    </TooltipTrigger>
    <TooltipContent>Подсказка</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
        },
        {
          id: 'toast',
          name: 'Toast',
          description: 'Всплывающее уведомление',
          variants: ['success', 'error', 'warning'],
          previewCode: `toast({ title: "Уведомление", description: "Описание" })
toast({ title: "Ошибка", variant: "destructive" })
toast.success("Успешно!")
toast.error("Ошибка!")`,
        },
        {
          id: 'sonner',
          name: 'Sonner',
          description: 'Компонент уведомлений Sonner',
          variants: ['standard'],
          previewCode: `<Sonner />
toast("Событие создано")`,
        },
        {
          id: 'alert-dialog',
          name: 'Alert Dialog',
          description: 'Диалог подтверждения действия',
          variants: ['confirm'],
          previewCode: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Удалить</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
      <AlertDialogDescription>Действие необратимо</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Отмена</AlertDialogCancel>
      <AlertDialogAction>Удалить</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
        },
      ],
    },
    {
      id: 'data-display',
      name: 'Данные',
      components: [
        {
          id: 'table',
          name: 'Table',
          description: 'Таблица с данными',
          variants: ['standard'],
          previewCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Имя</TableHead>
      <TableHead>Статус</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>Активен</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
        },
        {
          id: 'avatar',
          name: 'Avatar',
          description: 'Аватар пользователя',
          variants: ['initials', 'image', 'group'],
          previewCode: `<Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
<Avatar><AvatarImage src="/avatar.jpg" /><AvatarFallback>CD</AvatarFallback></Avatar>`,
        },
        {
          id: 'card',
          name: 'Card',
          description: 'Карточка контента',
          variants: ['standard', 'interactive'],
          previewCode: `<Card>
  <CardHeader>
    <CardTitle>Заголовок</CardTitle>
    <CardDescription>Описание</CardDescription>
  </CardHeader>
  <CardContent>Содержимое</CardContent>
  <CardFooter><Button>Действие</Button></CardFooter>
</Card>`,
        },
        {
          id: 'chart',
          name: 'Chart',
          description: 'Графики и диаграммы',
          variants: ['line', 'bar', 'area', 'pie'],
          previewCode: `<ChartContainer config={chartConfig}>
  <AreaChart data={data}>
    <Area dataKey="value" />
  </AreaChart>
</ChartContainer>`,
        },
      ],
    },
    {
      id: 'overlays',
      name: 'Оверлеи',
      components: [
        {
          id: 'dialog',
          name: 'Dialog',
          description: 'Модальное диалоговое окно',
          variants: ['standard', 'scrollable'],
          previewCode: `<Dialog>
  <DialogTrigger asChild><Button>Открыть</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Заголовок</DialogTitle>
      <DialogDescription>Описание</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
        },
        {
          id: 'sheet',
          name: 'Sheet',
          description: 'Боковая выдвигающаяся панель',
          variants: ['right', 'left', 'top', 'bottom'],
          previewCode: `<Sheet>
  <SheetTrigger asChild><Button>Открыть</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Заголовок</SheetTitle>
      <SheetDescription>Описание</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
        },
        {
          id: 'dropdown-menu',
          name: 'Dropdown Menu',
          description: 'Выпадающее меню',
          variants: ['standard'],
          previewCode: `<DropdownMenu>
  <DropdownMenuTrigger asChild><Button>Меню</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Действия</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Профиль</DropdownMenuItem>
    <DropdownMenuItem>Настройки</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
        },
        {
          id: 'accordion',
          name: 'Accordion',
          description: 'Сворачиваемые секции',
          variants: ['single', 'multiple'],
          previewCode: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Раздел 1</AccordionTrigger>
    <AccordionContent>Контент</AccordionContent>
  </AccordionItem>
</Accordion>`,
        },
        {
          id: 'popover',
          name: 'Popover',
          description: 'Всплывающее окно с контентом',
          variants: ['standard'],
          previewCode: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Открыть</Button>
  </PopoverTrigger>
  <PopoverContent>Контент поповера</PopoverContent>
</Popover>`,
        },
        {
          id: 'drawer',
          name: 'Drawer',
          description: 'Выдвижной ящик (мобильный Sheet)',
          variants: ['standard'],
          previewCode: `<Drawer>
  <DrawerTrigger asChild><Button>Открыть</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Заголовок</DrawerTitle>
      <DrawerDescription>Описание</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`,
        },
        {
          id: 'hover-card',
          name: 'Hover Card',
          description: 'Карточка при наведении',
          variants: ['standard'],
          previewCode: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@user</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-2">
      <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
      <div>
        <h4>User Name</h4>
        <p>@username</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
        },
        {
          id: 'context-menu',
          name: 'Context Menu',
          description: 'Контекстное меню (правый клик)',
          variants: ['standard'],
          previewCode: `<ContextMenu>
  <ContextMenuTrigger className="p-8">Правый клик здесь</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Копировать</ContextMenuItem>
    <ContextMenuItem>Вставить</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Удалить</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
        },
      ],
    },
    {
      id: 'navigation',
      name: 'Навигация',
      components: [
        {
          id: 'tabs',
          name: 'Tabs',
          description: 'Вкладки для переключения контента',
          variants: ['boxed', 'underline', 'pills'],
          previewCode: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Вкладка 1</TabsTrigger>
    <TabsTrigger value="tab2">Вкладка 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Контент 1</TabsContent>
  <TabsContent value="tab2">Контент 2</TabsContent>
</Tabs>`,
        },
        {
          id: 'breadcrumb',
          name: 'Breadcrumb',
          description: 'Хлебные крошки навигации',
          variants: ['standard'],
          previewCode: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Главная</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Страница</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        },
        {
          id: 'pagination',
          name: 'Pagination',
          description: 'Постраничная навигация',
          variants: ['standard'],
          previewCode: `<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
        },
        {
          id: 'navigation-menu',
          name: 'Navigation Menu',
          description: 'Меню навигации с выпадающими списками',
          variants: ['standard'],
          previewCode: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Продукты</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Продукт 1</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
        },
        {
          id: 'menubar',
          name: 'Menubar',
          description: 'Меню в стиле desktop приложения',
          variants: ['standard'],
          previewCode: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Файл</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Новый</MenubarItem>
      <MenubarItem>Открыть</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Выход</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
        },
        {
          id: 'sidebar',
          name: 'Sidebar',
          description: 'Боковая панель навигации',
          variants: ['standard', 'collapsible'],
          previewCode: `<Sidebar>
  <SidebarHeader>Логотип</SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Главная</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenuItem><SidebarMenuButton>Дашборд</SidebarMenuButton></SidebarMenuItem>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>`,
        },
      ],
    },
    {
      id: 'toggle',
      name: 'Переключатели',
      components: [
        {
          id: 'toggle',
          name: 'Toggle',
          description: 'Кнопка-переключатель',
          variants: ['standard', 'outline'],
          previewCode: `<Toggle>Жирный</Toggle>
<Toggle variant="outline">Курсив</Toggle>`,
        },
        {
          id: 'toggle-group',
          name: 'Toggle Group',
          description: 'Группа переключателей',
          variants: ['single', 'multiple'],
          previewCode: `<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
  <ToggleGroupItem value="underline">U</ToggleGroupItem>
</ToggleGroup>`,
        },
        {
          id: 'collapsible',
          name: 'Collapsible',
          description: 'Сворачиваемый контейнер',
          variants: ['standard'],
          previewCode: `<Collapsible>
  <CollapsibleTrigger>Показать больше</CollapsibleTrigger>
  <CollapsibleContent>Скрытый контент</CollapsibleContent>
</Collapsible>`,
        },
      ],
    },
    {
      id: 'layout',
      name: 'Layout',
      components: [
        {
          id: 'scroll-area',
          name: 'Scroll Area',
          description: 'Кастомная область прокрутки',
          variants: ['vertical', 'horizontal', 'both'],
          previewCode: `<ScrollArea className="h-48 w-48">
  <div className="p-4">Длинный контент...</div>
</ScrollArea>`,
        },
        {
          id: 'resizable',
          name: 'Resizable',
          description: 'Изменяемые размеры панелей',
          variants: ['horizontal', 'vertical'],
          previewCode: `<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>Панель 1</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Панель 2</ResizablePanel>
</ResizablePanelGroup>`,
        },
        {
          id: 'carousel',
          name: 'Carousel',
          description: 'Карусель/слайдер',
          variants: ['manual', 'autoplay'],
          previewCode: `<Carousel>
  <CarouselContent>
    <CarouselItem>Слайд 1</CarouselItem>
    <CarouselItem>Слайд 2</CarouselItem>
    <CarouselItem>Слайд 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
        },
      ],
    },
    {
      id: 'utilities',
      name: 'Утилиты',
      components: [
        {
          id: 'command',
          name: 'Command',
          description: 'Командная палитра (Cmd+K)',
          variants: ['standard'],
          previewCode: `<Command>
  <CommandInput placeholder="Поиск..." />
  <CommandList>
    <CommandEmpty>Не найдено</CommandEmpty>
    <CommandGroup heading="Предложения">
      <CommandItem>Файл</CommandItem>
      <CommandItem>Настройки</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        },
      ],
    },
  ],
}

// Типы данных
interface Library {
  name: string
  type: 'headless' | 'styled'
  size: string
  components: string
  compatibility: string
  feature: string
  verdict?: string
}

interface Stack {
  id: string
  name: string
  library: string
  type: 'headless' | 'styled'
  size: string
  compatibility: string
  useCase: string
  description: string
}

// Данные о библиотеках
const headlessLibraries: Library[] = [
  {
    name: 'Shadcn/ui',
    type: 'headless',
    size: '~50KB',
    components: '50+',
    compatibility: 'Tailwind (Родная)',
    feature: 'Копипаст кода, Radix + Tailwind',
    verdict: 'Лучший выбор для уникального дизайна',
  },
  {
    name: 'Radix UI',
    type: 'headless',
    size: '~30KB',
    components: '28+',
    compatibility: 'Tailwind (Рекомендуется)',
    feature: 'Примитивы, макс. доступность',
    verdict: 'Основа для своей библиотеки',
  },
  {
    name: 'Headless UI',
    type: 'headless',
    size: '~45KB',
    components: '10',
    compatibility: 'Tailwind (Родная)',
    feature: 'Официальный партнёр Tailwind',
    verdict: 'Минимализм, надёжность, простые проекты',
  },
]

const styledLibraries: Library[] = [
  {
    name: 'Material UI',
    type: 'styled',
    size: '~320KB',
    components: '70+',
    compatibility: 'CSS Modules (с Tailwind сложно)',
    feature: 'Material Design (Google)',
  },
  {
    name: 'Mantine',
    type: 'styled',
    size: '~250KB',
    components: '100+',
    compatibility: 'CSS Modules (Native CSS v7)',
    feature: 'Мощный хук-инструментарий',
  },
  {
    name: 'Chakra UI',
    type: 'styled',
    size: '~180KB',
    components: '55',
    compatibility: 'CSS-in-JS (Emotion)',
    feature: 'Accessibility-first',
  },
  {
    name: 'Ant Design',
    type: 'styled',
    size: '~450KB',
    components: '65+',
    compatibility: 'CSS Modules (с Tailwind сложно)',
    feature: 'Enterprise стандарт',
  },
]

const recommendedStacks: Stack[] = [
  {
    id: 'modern',
    name: 'Современный стандарт',
    library: 'Shadcn/ui',
    type: 'headless',
    size: '~50KB',
    compatibility: 'Tailwind (Родная)',
    useCase: 'SaaS, стартапы, маркетинг, уникальный дизайн',
    description:
      'Shadcn/ui помещает исходный код (.tsx) прямо в проект. Полный контроль типов и стилей, без чёрного ящика.',
  },
  {
    id: 'control',
    name: 'Контроль и Кастомизация',
    library: 'Radix UI',
    type: 'headless',
    size: '~30KB',
    compatibility: 'Tailwind (Рекомендуется)',
    useCase: 'Создание собственной Design System с нуля',
    description:
      'Берёте только движок (Radix) и сами верстаете UI. Максимальная гибкость, но трудоёмко.',
  },
  {
    id: 'minimal',
    name: 'Минимализм и Скорость',
    library: 'Headless UI',
    type: 'headless',
    size: '~45KB',
    compatibility: 'Tailwind (Родная)',
    useCase: 'Лендинги, простые приложения, блоги',
    description:
      'Создан авторами Tailwind. Малый вес, 10 компонентов покрывают 90% базовых нужд.',
  },
  {
    id: 'enterprise',
    name: 'Корпоративный Enterprise',
    library: 'Ant Design',
    type: 'styled',
    size: '~450KB',
    compatibility: 'CSS Modules',
    useCase: 'CRM, ERP, банковские системы, сложные админки',
    description:
      'Решение для сложных таблиц и форм. Размер оправдан экономией времени на логику.',
  },
  {
    id: 'functional',
    name: 'Функциональный комбайн',
    library: 'Mantine',
    type: 'styled',
    size: '~250KB',
    compatibility: 'CSS Modules (Нативно)',
    useCase: 'Быстрые прототипы, проекты с данными и графиками',
    description:
      'Mantine v7 перешёл на нативный CSS. 100+ компонентов и хуков из коробки.',
  },
]

const radixUseCases = [
  {
    title: 'Вы НЕ используете Tailwind CSS',
    description:
      'Если ваш стек — Styled Components, Emotion или CSS Modules, Shadcn/ui будет неудобен. Radix UI нейтрален к стилям.',
  },
  {
    title: 'Создание собственной Design System',
    description:
      'Для библиотеки компонентов большой компании Radix даёт идеальную базу — доступность, фокус, клавиатура — без навязывания внешнего вида.',
  },
  {
    title: 'Нужны специфические примитивы',
    description:
      'Radix имеет более широкий набор низкоуровневых компонентов (ScrollArea, AspectRatio, Collapsible), чем Headless UI.',
  },
]

// Данные для радарной диаграммы
const radarData = [
  { criterion: 'Лёгкость', shadcn: 95, radix: 90, headlessUI: 85, mui: 60, antd: 50, mantine: 75 },
  { criterion: 'Гибкость', shadcn: 95, radix: 100, headlessUI: 85, mui: 55, antd: 45, mantine: 70 },
  { criterion: 'Скорость', shadcn: 80, radix: 60, headlessUI: 75, mui: 90, antd: 95, mantine: 95 },
  { criterion: 'Документация', shadcn: 90, radix: 85, headlessUI: 80, mui: 95, antd: 90, mantine: 95 },
  { criterion: 'Компоненты', shadcn: 85, radix: 70, headlessUI: 50, mui: 95, antd: 95, mantine: 100 },
  { criterion: 'Бандл', shadcn: 90, radix: 95, headlessUI: 90, mui: 40, antd: 30, mantine: 50 },
]

// Объяснение критериев
const criteriaExplanation = [
  { name: 'Лёгкость', desc: 'Простота внедрения и порог входа' },
  { name: 'Гибкость', desc: 'Контроль над дизайном и стилизацией' },
  { name: 'Скорость', desc: 'Быстрота разработки из коробки' },
  { name: 'Документация', desc: 'Качество и полнота документации' },
  { name: 'Компоненты', desc: 'Количество готовых компонентов' },
  { name: 'Бандл', desc: 'Малый размер (чем выше, тем меньше)' },
]

// Статистика библиотек
const libraryStats = [
  { name: 'Shadcn/ui', stars: '83K', weeklyDownloads: '420K', year: '2023', license: 'MIT' },
  { name: 'Radix UI', stars: '16K', weeklyDownloads: '3.2M', year: '2020', license: 'MIT' },
  { name: 'Headless UI', stars: '25K', weeklyDownloads: '1.8M', year: '2020', license: 'MIT' },
  { name: 'Material UI', stars: '94K', weeklyDownloads: '4.5M', year: '2014', license: 'MIT' },
  { name: 'Mantine', stars: '26K', weeklyDownloads: '850K', year: '2021', license: 'MIT' },
  { name: 'Chakra UI', stars: '38K', weeklyDownloads: '620K', year: '2019', license: 'MIT' },
  { name: 'Ant Design', stars: '92K', weeklyDownloads: '1.2M', year: '2015', license: 'MIT' },
]

// Данные для тепловой карты совместимости
const compatibilityMatrix = [
  { library: 'Shadcn/ui', tailwind: 100, cssModules: 30, cssInJs: 20, styledComponents: 25 },
  { library: 'Radix UI', tailwind: 95, cssModules: 90, cssInJs: 85, styledComponents: 90 },
  { library: 'Headless UI', tailwind: 100, cssModules: 40, cssInJs: 30, styledComponents: 35 },
  { library: 'Material UI', tailwind: 35, cssModules: 80, cssInJs: 90, styledComponents: 70 },
  { library: 'Mantine', tailwind: 40, cssModules: 95, cssInJs: 50, styledComponents: 45 },
  { library: 'Chakra UI', tailwind: 45, cssModules: 60, cssInJs: 95, styledComponents: 85 },
  { library: 'Ant Design', tailwind: 30, cssModules: 90, cssInJs: 70, styledComponents: 65 },
]

// Анимации
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

// SVG логотипы брендов (индустриальный минимализм)
const brandLogos: Record<string, React.ReactNode> = {
  'Shadcn/ui': (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="24" height="24" rx="1" />
      <path d="M4 12h24M12 4v24M20 4v24" strokeOpacity="0.3" />
      <rect x="8" y="8" width="4" height="4" fill="currentColor" stroke="none" />
    </svg>
  ),
  'Radix UI': (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
      <circle cx="8" cy="8" r="4" />
      <circle cx="8" cy="24" r="4" fillOpacity="0.5" />
      <rect x="14" y="4" width="6" height="24" rx="1" />
    </svg>
  ),
  'Headless UI': (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="16" cy="16" r="10" strokeDasharray="4 2" />
      <circle cx="16" cy="16" r="4" fill="currentColor" stroke="none" />
    </svg>
  ),
  'Material UI': (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
      <path d="M4 8l12-6 12 6v4l-12 6-12-6V8z" fillOpacity="0.3" />
      <path d="M4 16l12 6 12-6v8l-12 6-12-6v-8z" />
    </svg>
  ),
  'Mantine': (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
      <circle cx="16" cy="16" r="10" fillOpacity="0.2" />
      <circle cx="16" cy="16" r="6" />
      <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  'Chakra UI': (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
      <circle cx="16" cy="16" r="12" fillOpacity="0.2" />
      <path d="M16 4 L28 16 L16 28 L4 16 Z" fillOpacity="0.6" />
      <circle cx="16" cy="16" r="4" />
    </svg>
  ),
  'Ant Design': (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
      <rect x="4" y="4" width="24" height="24" rx="2" fillOpacity="0.2" />
      <rect x="8" y="8" width="16" height="16" rx="1" fillOpacity="0.4" />
      <rect x="12" y="12" width="8" height="8" />
    </svg>
  ),
}

// Компонент вкладки
function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 text-sm font-medium uppercase tracking-wider
        border transition-colors duration-200
        ${active 
          ? 'bg-foreground text-background border-foreground' 
          : 'bg-transparent text-foreground border-border hover:border-foreground/50'
        }
      `}
    >
      {children}
    </button>
  )
}

// Компонент карточки библиотеки
function LibraryCard({ library }: { library: Library }) {
  const logo = brandLogos[library.name]
  
  return (
    <motion.div
      variants={fadeIn}
      className="border border-border bg-background p-5 hover:border-foreground/30 transition-colors"
    >
      <div className="flex items-start gap-3 mb-4">
        {logo && (
          <div className="flex-shrink-0 text-foreground">
            {logo}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold tracking-tight truncate">{library.name}</h3>
            <span
              className={`
                text-xs uppercase tracking-wider px-2 py-1 border flex-shrink-0
                ${library.type === 'headless' 
                  ? 'border-foreground/50 text-foreground' 
                  : 'border-border text-muted-foreground'
                }
              `}
            >
              {library.type === 'headless' ? 'Headless' : 'Styled'}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-muted-foreground uppercase text-xs tracking-wider">Размер</span>
            <p className="font-mono">{library.size}</p>
          </div>
          <div>
            <span className="text-muted-foreground uppercase text-xs tracking-wider">Компоненты</span>
            <p className="font-mono">{library.components}</p>
          </div>
        </div>

        <div>
          <span className="text-muted-foreground uppercase text-xs tracking-wider">Совместимость</span>
          <p>{library.compatibility}</p>
        </div>

        <div>
          <span className="text-muted-foreground uppercase text-xs tracking-wider">Особенность</span>
          <p>{library.feature}</p>
        </div>

        {library.verdict && (
          <div className="pt-3 border-t border-border">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Вердикт</p>
            <p className="font-medium">{library.verdict}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Компонент карточки стека
function StackCard({ stack, index }: { stack: Stack; index: number }) {
  return (
    <motion.div
      variants={fadeIn}
      className="border border-border bg-background p-5 hover:border-foreground/30 transition-colors"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="text-lg font-semibold tracking-tight">{stack.name}</h3>
        </div>
        <span
          className={`
            text-xs uppercase tracking-wider px-2 py-1 border
            ${stack.type === 'headless' 
              ? 'border-foreground/50 text-foreground' 
              : 'border-border text-muted-foreground'
            }
          `}
        >
          {stack.type === 'headless' ? 'Headless' : 'Styled'}
        </span>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <span className="text-muted-foreground uppercase text-xs tracking-wider">Библиотека</span>
          <p className="font-medium">{stack.library}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">{stack.description}</p>

        <div className="pt-3 border-t border-border">
          <span className="text-muted-foreground uppercase text-xs tracking-wider">Для каких задач</span>
          <p>{stack.useCase}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Компонент таблицы сравнения
function ComparisonTable() {
  return (
    <div className="border border-border overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Связка</th>
            <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Библиотека</th>
            <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Тип</th>
            <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Размер</th>
            <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Совместимость</th>
            <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Для каких задач</th>
          </tr>
        </thead>
        <tbody>
          {recommendedStacks.map((stack, i) => (
            <tr
              key={stack.id}
              className={i % 2 === 0 ? 'bg-background' : 'bg-muted/10'}
            >
              <td className="px-4 py-3 font-medium">
                <span className="font-mono text-xs text-muted-foreground mr-2">{String(i + 1).padStart(2, '0')}</span>
                {stack.name}
              </td>
              <td className="px-4 py-3">{stack.library}</td>
              <td className="px-4 py-3">
                <span
                  className={`
                    text-xs uppercase tracking-wider px-2 py-0.5 border
                    ${stack.type === 'headless' 
                      ? 'border-foreground/30 text-foreground' 
                      : 'border-border text-muted-foreground'
                    }
                  `}
                >
                  {stack.type === 'headless' ? 'Headless' : 'Styled'}
                </span>
              </td>
              <td className="px-4 py-3 font-mono">{stack.size}</td>
              <td className="px-4 py-3">{stack.compatibility}</td>
              <td className="px-4 py-3 text-muted-foreground">{stack.useCase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Компонент секции архитектуры
function ArchitectureSection() {
  return (
    <div className="grid md:grid-cols-2 gap-px bg-border">
      {/* Headless */}
      <div className="bg-background p-6">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Группа А</span>
          <h3 className="text-xl font-semibold tracking-tight mt-1">HEADLESS</h3>
          <p className="text-sm text-muted-foreground mt-1">Shadcn, Radix, Headless UI</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Суть</h4>
            <p className="text-sm leading-relaxed">
              Библиотека даёт только логику (открытие/закрытие меню, доступность). Стили пишете сами через Tailwind.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Плюсы</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-2">
                <span className="text-foreground">[+]</span>
                <span>Полный контроль над дизайном</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">[+]</span>
                <span>Малый вес бандла</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">[+]</span>
                <span>Лёгкая стилизация</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Минусы</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-2">
                <span className="text-muted-foreground">[-]</span>
                <span>Требует времени на написание CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Styled */}
      <div className="bg-background p-6">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Группа Б</span>
          <h3 className="text-xl font-semibold tracking-tight mt-1">STYLED</h3>
          <p className="text-sm text-muted-foreground mt-1">Ant Design, MUI, Mantine</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Суть</h4>
            <p className="text-sm leading-relaxed">
              Библиотека даёт и логику, и готовый внешний вид.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Плюсы</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-2">
                <span className="text-foreground">[+]</span>
                <span>Высокая скорость разработки</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">[+]</span>
                <span>Готовые сложные компоненты</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Минусы</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-2">
                <span className="text-muted-foreground">[-]</span>
                <span>Большой вес бандла</span>
              </li>
              <li className="flex gap-2">
                <span className="text-muted-foreground">[-]</span>
                <span>Сложная перекраска (война стилей)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Компонент сценария дизайна
function DesignScenario({
  title,
  headlessRating,
  styledRating,
  headlessDesc,
  styledDesc,
  conclusion,
}: {
  title: string
  headlessRating: number
  styledRating: number
  headlessDesc: string
  styledDesc: string
  conclusion: string
}) {
  const renderRating = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <span
            key={level}
            className={`
              w-4 h-4 border
              ${level <= rating 
                ? 'bg-foreground border-foreground' 
                : 'bg-transparent border-border'
              }
            `}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="border border-border">
      <div className="px-5 py-4 border-b border-border bg-muted/10">
        <h3 className="font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-px bg-border">
        <div className="bg-background p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium uppercase tracking-wider">Headless</span>
            {renderRating(headlessRating)}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{headlessDesc}</p>
        </div>
        <div className="bg-background p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium uppercase tracking-wider">Styled</span>
            {renderRating(styledRating)}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{styledDesc}</p>
        </div>
      </div>
      <div className="px-5 py-4 bg-muted/5 border-t border-border">
        <p className="text-sm">
          <span className="text-xs uppercase tracking-wider text-muted-foreground mr-2">Вывод:</span>
          {conclusion}
        </p>
      </div>
    </div>
  )
}

// Компонент алгоритма выбора
function DecisionAlgorithm() {
  const decisions = [
    { condition: 'Важен уникальный дизайн и скорость отрисовки', result: 'Shadcn/ui' },
    { condition: 'Нужна быстрая сборка стандартной админки', result: 'Ant Design или MUI' },
    { condition: 'Нужен мощный функционал (hooks, utils) и скорость', result: 'Mantine' },
    { condition: 'Пишете свой UI Kit без Tailwind', result: 'Radix UI' },
  ]

  return (
    <div className="border border-border divide-y divide-border">
      {decisions.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
          className="flex items-center gap-4 px-5 py-4 hover:bg-muted/5 transition-colors"
        >
          <span className="text-xs font-mono text-muted-foreground w-6">{String(i + 1).padStart(2, '0')}</span>
          <div className="flex-1">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Если</span>
            <p className="font-medium">{item.condition}</p>
          </div>
          <span className="text-muted-foreground">--&gt;</span>
          <span className="text-sm font-mono font-medium">{item.result}</span>
        </motion.div>
      ))}
    </div>
  )
}

// Компонент секции Radix
function RadixSection() {
  return (
    <div className="border border-border divide-y divide-border">
      {radixUseCases.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
          className="p-5"
        >
          <div className="flex gap-4">
            <span className="text-xs font-mono text-muted-foreground">[{i + 1}]</span>
            <div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Данные для сравнения с победителями
const comparisonData = [
  { criterion: 'Лёгкость', winner: 'Shadcn/ui', score: 95, desc: 'Простота внедрения' },
  { criterion: 'Гибкость', winner: 'Radix UI', score: 100, desc: 'Контроль над UI' },
  { criterion: 'Скорость', winner: 'Ant Design', score: 95, desc: 'Быстрота разработки' },
  { criterion: 'Документация', winner: 'Mantine', score: 95, desc: 'Качество docs' },
  { criterion: 'Компоненты', winner: 'Mantine', score: 100, desc: 'Количество готовых' },
  { criterion: 'Бандл', winner: 'Radix UI', score: 95, desc: 'Малый размер' },
]

// Полные рекомендуемые связки
const fullStackData = [
  {
    stack: 'Next + TS + Tailwind + Shadcn/ui',
    library: 'Shadcn/ui',
    type: 'headless',
    size: '~50KB',
    styling: 'Tailwind',
    compatibility: 'Родная',
    useCase: 'Уникальный дизайн, SaaS, Стартапы',
  },
  {
    stack: 'Next + TS + Tailwind + Radix UI',
    library: 'Radix UI',
    type: 'headless',
    size: '~30KB',
    styling: 'Tailwind',
    compatibility: 'Рекомендуется',
    useCase: 'Своя библиотека компонентов',
  },
  {
    stack: 'Next + TS + Tailwind + Headless UI',
    library: 'Headless UI',
    type: 'headless',
    size: '~45KB',
    styling: 'Tailwind',
    compatibility: 'Родная',
    useCase: 'Минимализм, лендинги',
  },
  {
    stack: 'Next + TS + CSS Modules + Mantine',
    library: 'Mantine',
    type: 'styled',
    size: '~250KB',
    styling: 'CSS Modules',
    compatibility: 'Нативно',
    useCase: 'Быстрые MVP, графики, сложная логика',
  },
  {
    stack: 'Next + TS + CSS Modules + MUI',
    library: 'Material UI',
    type: 'styled',
    size: '~320KB',
    styling: 'CSS Modules',
    compatibility: 'Рекомендуется',
    useCase: 'Проекты в стиле Material Design',
  },
  {
    stack: 'Next + TS + CSS Modules + Ant Design',
    library: 'Ant Design',
    type: 'styled',
    size: '~450KB',
    styling: 'CSS Modules',
    compatibility: 'Рекомендуется',
    useCase: 'Enterprise, CRM, ERP системы',
  },
]

// Компонент сравнения с явными победителями
function RadarComparison() {
  const [selectedLib, setSelectedLib] = useState<string>('shadcn')

  const libraries = [
    { id: 'shadcn', name: 'Shadcn/ui', type: 'headless', size: '~50KB', styling: 'Tailwind', compatibility: 'Родная' },
    { id: 'radix', name: 'Radix UI', type: 'headless', size: '~30KB', styling: 'Любой', compatibility: 'Агностик' },
    { id: 'headlessUI', name: 'Headless UI', type: 'headless', size: '~45KB', styling: 'Tailwind', compatibility: 'Родная' },
    { id: 'mui', name: 'Material UI', type: 'styled', size: '~320KB', styling: 'CSS Modules', compatibility: 'Рекомендуется' },
    { id: 'antd', name: 'Ant Design', type: 'styled', size: '~450KB', styling: 'CSS Modules', compatibility: 'Рекомендуется' },
    { id: 'mantine', name: 'Mantine', type: 'styled', size: '~250KB', styling: 'CSS Modules', compatibility: 'Нативно' },
  ]

  const selectedLibrary = libraries.find(l => l.id === selectedLib)
  const libData = radarData.map(item => ({
    criterion: item.criterion,
    score: item[selectedLib as keyof typeof item] as number,
  }))

  const totalScore = libData.reduce((sum, item) => sum + item.score, 0)
  const avgScore = Math.round(totalScore / libData.length)

  return (
    <div className="border border-border bg-background">
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="font-semibold tracking-tight">СРАВНЕНИЕ БИБЛИОТЕК</h3>
            <p className="text-xs text-muted-foreground mt-1">Выберите библиотеку для анализа</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Итого: <span className="font-mono font-medium text-foreground">{totalScore}</span> / 600
            </span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Среднее: <span className="font-mono font-medium text-foreground">{avgScore}</span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-[1fr_300px] gap-px bg-border">
        {/* Радар */}
        <div className="bg-background p-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" strokeWidth={1} />
                <PolarAngleAxis 
                  dataKey="criterion" 
                  tick={{ 
                    fill: 'hsl(var(--foreground))', 
                    fontSize: 11,
                    fontFamily: 'monospace'
                  }}
                />
                <PolarRadiusAxis 
                  angle={30} 
                  domain={[0, 100]} 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                  tickCount={5}
                />
                <Radar
                  name={selectedLibrary?.name}
                  dataKey={selectedLib}
                  stroke="hsl(var(--foreground))"
                  strokeWidth={2}
                  fill="hsl(var(--foreground))"
                  fillOpacity={0.15}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Выбор библиотеки + техническая информация */}
        <div className="bg-background p-4">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 px-2">
              Headless
            </div>
            {libraries.filter(l => l.type === 'headless').map(lib => (
              <button
                key={lib.id}
                onClick={() => setSelectedLib(lib.id)}
                className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                  selectedLib === lib.id 
                    ? 'bg-foreground text-background' 
                    : 'hover:bg-muted'
                }`}
              >
                {lib.name}
              </button>
            ))}
            
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 mt-4 px-2">
              Styled
            </div>
            {libraries.filter(l => l.type === 'styled').map(lib => (
              <button
                key={lib.id}
                onClick={() => setSelectedLib(lib.id)}
                className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                  selectedLib === lib.id 
                    ? 'bg-foreground text-background' 
                    : 'hover:bg-muted'
                }`}
              >
                {lib.name}
              </button>
            ))}
          </div>

          {/* Техническая информация о выбранной библиотеке */}
          {selectedLibrary && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Технические детали
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Размер:</span>
                  <span className="font-mono">{selectedLibrary.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Стилизация:</span>
                  <span>{selectedLibrary.styling}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Совместимость:</span>
                  <span>{selectedLibrary.compatibility}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Детальные значения */}
      <div className="border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {libData.map((item, i) => (
            <div key={item.criterion} className="bg-background p-4 text-center">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {item.criterion}
              </div>
              <div className="text-2xl font-mono font-medium">{item.score}</div>
              <div className="mt-2 h-1 bg-muted">
                <div 
                  className="h-full bg-foreground transition-all duration-300"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Компонент статистики библиотек
function LibraryStatsTable() {
  return (
    <div className="border border-border bg-background">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-semibold tracking-tight">СТАТИСТИКА БИБЛИОТЕК</h3>
        <p className="text-xs text-muted-foreground mt-1">GitHub звёзды, загрузки npm, год создания</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Библиотека</th>
              <th className="px-4 py-3 text-center uppercase text-xs tracking-wider font-medium">GitHub Stars</th>
              <th className="px-4 py-3 text-center uppercase text-xs tracking-wider font-medium">NPM / неделя</th>
              <th className="px-4 py-3 text-center uppercase text-xs tracking-wider font-medium">Год</th>
              <th className="px-4 py-3 text-center uppercase text-xs tracking-wider font-medium">Лицензия</th>
            </tr>
          </thead>
          <tbody>
            {libraryStats.map((lib, i) => (
              <tr key={lib.name} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/10'}>
                <td className="px-4 py-3 font-medium">{lib.name}</td>
                <td className="px-4 py-3 text-center font-mono">{lib.stars}</td>
                <td className="px-4 py-3 text-center font-mono">{lib.weeklyDownloads}</td>
                <td className="px-4 py-3 text-center font-mono">{lib.year}</td>
                <td className="px-4 py-3 text-center">{lib.license}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Компонент критериев оценки
function CriteriaExplanation() {
  return (
    <div className="border border-border bg-background">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-semibold tracking-tight">КРИТЕРИИ ОЦЕНКИ</h3>
        <p className="text-xs text-muted-foreground mt-1">Что означает каждый показатель в радаре</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {criteriaExplanation.map((item) => (
          <div key={item.name} className="bg-background p-4">
            <div className="text-sm font-semibold mb-1">{item.name}</div>
            <div className="text-xs text-muted-foreground">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Компонент тепловой карты
function HeatmapChart() {
  const stylingMethods = ['Tailwind', 'CSS Modules', 'CSS-in-JS', 'Styled Comp.']

  const getIntensity = (value: number) => {
    if (value >= 90) return 'bg-foreground text-background'
    if (value >= 70) return 'bg-foreground/70 text-background'
    if (value >= 50) return 'bg-foreground/40 text-foreground'
    if (value >= 30) return 'bg-foreground/20 text-muted-foreground'
    return 'bg-muted/30 text-muted-foreground'
  }

  return (
    <div className="border border-border bg-background">
      <div className="px-5 py-4 border-b border-border">
        <h3 className="font-semibold tracking-tight">МАТРИЦА СОВМЕСТИМОСТИ</h3>
        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
          Интенсивность показывает качество интеграции
        </p>
      </div>
      
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left pb-3 uppercase text-xs tracking-wider font-medium text-muted-foreground">
                  Библиотека
                </th>
                {stylingMethods.map((method) => (
                  <th 
                    key={method} 
                    className="text-center pb-3 uppercase text-xs tracking-wider font-medium text-muted-foreground"
                  >
                    {method}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compatibilityMatrix.map((row, i) => (
                <tr key={row.library} className={i % 2 === 0 ? 'bg-transparent' : 'bg-muted/5'}>
                  <td className="py-2 pr-4 font-medium">{row.library}</td>
                  <td className="p-1">
                    <div className={`mx-auto w-12 h-8 flex items-center justify-center font-mono text-xs ${getIntensity(row.tailwind)}`}>
                      {row.tailwind}
                    </div>
                  </td>
                  <td className="p-1">
                    <div className={`mx-auto w-12 h-8 flex items-center justify-center font-mono text-xs ${getIntensity(row.cssModules)}`}>
                      {row.cssModules}
                    </div>
                  </td>
                  <td className="p-1">
                    <div className={`mx-auto w-12 h-8 flex items-center justify-center font-mono text-xs ${getIntensity(row.cssInJs)}`}>
                      {row.cssInJs}
                    </div>
                  </td>
                  <td className="p-1">
                    <div className={`mx-auto w-12 h-8 flex items-center justify-center font-mono text-xs ${getIntensity(row.styledComponents)}`}>
                      {row.styledComponents}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="uppercase tracking-wider">Шкала:</span>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-muted/30" />
              <span>Низкая</span>
            </div>
            <span className="text-border">--</span>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-foreground/40" />
              <span>Средняя</span>
            </div>
            <span className="text-border">--</span>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-foreground" />
              <span>Высокая</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Компонент демонстрации UI компонентов с 4-колоночным layout
function ComponentsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState(componentsData.categories[0].id)
  const [selectedComponent, setSelectedComponent] = useState(componentsData.categories[0].components[0].id)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [activeTab, setActiveTab] = useState('preview')
  
  // Избранные компоненты (сохранение в localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('shadcn-favorites')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })
  
  // Сохранение в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('shadcn-favorites', JSON.stringify(favorites))
  }, [favorites])
  
  // Переключение избранного
  const toggleFavorite = (componentId: string) => {
    setFavorites(prev => 
      prev.includes(componentId) 
        ? prev.filter(id => id !== componentId)
        : [...prev, componentId]
    )
  }
  
  // Проверка, является ли компонент избранным
  const isFavorite = (componentId: string) => favorites.includes(componentId)

  const currentCategory = componentsData.categories.find(c => c.id === selectedCategory)
  
  // Для избранного ищем компонент во всех категориях
  const currentComponent = selectedCategory === 'favorites'
    ? (() => {
        for (const cat of componentsData.categories) {
          const comp = cat.components.find(c => c.id === selectedComponent)
          if (comp) return comp
        }
        return null
      })()
    : currentCategory?.components.find(c => c.id === selectedComponent)

  // Рендер превью компонента по его типу с учётом выбранного варианта
  const renderPreview = () => {
    if (!currentComponent) return null
    
    const selectedVariantName = currentComponent.variants[selectedVariant]

    switch (currentComponent.id) {
      case 'button':
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {currentComponent.variants.map((variant) => (
                <Button 
                  key={variant} 
                  variant={variant as any}
                  className={variant === selectedVariantName ? 'ring-2 ring-foreground ring-offset-2' : ''}
                >
                  {variant}
                </Button>
              ))}
            </div>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{selectedVariantName}</span>
            </div>
          </div>
        )
      case 'badge':
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {currentComponent.variants.map((variant) => (
                <Badge 
                  key={variant} 
                  variant={variant as any}
                  className={variant === selectedVariantName ? 'ring-2 ring-foreground ring-offset-2' : ''}
                >
                  {variant}
                </Badge>
              ))}
            </div>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{selectedVariantName}</span>
            </div>
          </div>
        )
      case 'separator':
        const sepOrientation = currentComponent.variants[selectedVariant] || 'horizontal'
        return (
          <div className="space-y-4 w-full">
            {sepOrientation === 'horizontal' && (
              <div className="w-full max-w-md space-y-4">
                <div className="text-sm text-muted-foreground">Выше разделителя</div>
                <Separator />
                <div className="text-sm text-muted-foreground">Ниже разделителя</div>
              </div>
            )}
            {sepOrientation === 'vertical' && (
              <div className="flex h-16 items-center gap-4">
                <div className="text-sm text-muted-foreground">Слева</div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-sm text-muted-foreground">Справа</div>
              </div>
            )}
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{sepOrientation}</span>
            </div>
          </div>
        )
      case 'skeleton':
        const skeletonType = currentComponent.variants[selectedVariant] || 'circle'
        return (
          <div className="space-y-4">
            {skeletonType === 'circle' && (
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            )}
            {skeletonType === 'text' && (
              <div className="space-y-2 w-full max-w-md">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            )}
            {skeletonType === 'card' && (
              <div className="w-full max-w-sm space-y-3">
                <Skeleton className="h-32 w-full rounded-md" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            )}
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{skeletonType}</span>
            </div>
          </div>
        )
      case 'aspect-ratio':
        const ratioStr = currentComponent.variants[selectedVariant] || '16:9'
        const ratioMap: Record<string, number> = { '16:9': 16/9, '4:3': 4/3, '1:1': 1, '21:9': 21/9 }
        const ratio = ratioMap[ratioStr] || 16/9
        return (
          <div className="space-y-4 w-full max-w-md">
            <AspectRatio ratio={ratio} className="bg-muted rounded-md flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-mono">{ratioStr}</span>
            </AspectRatio>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{ratioStr}</span>
            </div>
          </div>
        )
      case 'input':
        // Берём варианты напрямую из данных компонента
        const inputVariants = currentComponent.variants
        const selectedInputType = inputVariants[selectedVariant] || inputVariants[0]
        return (
          <div className="space-y-4">
            <div className="space-y-3 w-full max-w-md">
              {inputVariants.map((type, i) => (
                <Input 
                  key={type} 
                  type={type} 
                  placeholder={type.charAt(0).toUpperCase() + type.slice(1)}
                  className={i === selectedVariant ? 'ring-2 ring-foreground' : ''}
                />
              ))}
            </div>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{selectedInputType}</span>
            </div>
          </div>
        )
      case 'textarea':
        const textareaState = currentComponent.variants[selectedVariant] || 'standard'
        return (
          <div className="space-y-4">
            <Textarea 
              placeholder="Введите текст..." 
              rows={4} 
              className="w-full max-w-md" 
              disabled={textareaState === 'disabled'}
            />
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{textareaState}</span>
            </div>
          </div>
        )
      case 'select':
        return (
          <Select>
            <SelectTrigger className="w-full max-w-md">
              <SelectValue placeholder="Выберите опцию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Опция 1</SelectItem>
              <SelectItem value="2">Опция 2</SelectItem>
              <SelectItem value="3">Опция 3</SelectItem>
            </SelectContent>
          </Select>
        )
      case 'checkbox':
        const checkboxState = currentComponent.variants[selectedVariant] || 'standard'
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox id="check" disabled={checkboxState === 'disabled'} />
              <Label htmlFor="check">Отметить</Label>
            </div>
            {checkboxState === 'disabled' && (
              <p className="text-xs text-muted-foreground">Checkbox отключён</p>
            )}
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{checkboxState}</span>
            </div>
          </div>
        )
      case 'switch':
        const switchState = currentComponent.variants[selectedVariant] || 'standard'
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Switch id="sw" disabled={switchState === 'disabled'} />
              <Label htmlFor="sw">Включить</Label>
            </div>
            {switchState === 'disabled' && (
              <p className="text-xs text-muted-foreground">Switch отключён</p>
            )}
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{switchState}</span>
            </div>
          </div>
        )
      case 'slider':
        const sliderType = currentComponent.variants[selectedVariant] || 'standard'
        return (
          <div className="space-y-4 w-full max-w-md">
            {sliderType === 'standard' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Громкость</span>
                  <span className="font-mono">50%</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            )}
            {sliderType === 'range' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Диапазон цен</span>
                  <span className="font-mono">25% - 75%</span>
                </div>
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
            )}
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{sliderType}</span>
            </div>
          </div>
        )
      case 'progress':
        const progressType = currentComponent.variants[selectedVariant] || 'determinate'
        return (
          <div className="space-y-4 w-full max-w-md">
            {progressType === 'determinate' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Прогресс</span>
                  <span className="font-mono">66%</span>
                </div>
                <Progress value={66} />
              </div>
            )}
            {progressType === 'indeterminate' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Загрузка...</span>
                </div>
                <Progress value={undefined} className="animate-pulse" />
              </div>
            )}
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{progressType}</span>
            </div>
          </div>
        )
      case 'alert':
        // Берём варианты напрямую из данных компонента
        const alertVariants = currentComponent.variants
        const selectedAlertVariant = alertVariants[selectedVariant] || alertVariants[0]
        return (
          <div className="space-y-4">
            <div className="w-full max-w-md space-y-4">
              {alertVariants.map((variant, i) => (
                <Alert 
                  key={variant} 
                  variant={variant as any}
                  className={i === selectedVariant ? 'ring-2 ring-foreground' : ''}
                >
                  <AlertTitle>{variant === 'destructive' ? 'Ошибка' : 'Информация'}</AlertTitle>
                  <AlertDescription>Это {variant === 'destructive' ? 'сообщение об ошибке' : 'информационное сообщение'}.</AlertDescription>
                </Alert>
              ))}
            </div>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{selectedAlertVariant}</span>
            </div>
          </div>
        )
      case 'tooltip':
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Наведи на меня</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Это всплывающая подсказка</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      case 'avatar':
        const avatarStyle = currentComponent.variants[selectedVariant] || 'initials'
        return (
          <div className="space-y-4">
            {avatarStyle === 'initials' && (
              <div className="flex gap-4">
                <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>EF</AvatarFallback></Avatar>
              </div>
            )}
            {avatarStyle === 'image' && (
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/1?v=4" />
                  <AvatarFallback>GH</AvatarFallback>
                </Avatar>
              </div>
            )}
            {avatarStyle === 'group' && (
              <div className="flex -space-x-4">
                <Avatar className="border-2 border-background"><AvatarFallback>AB</AvatarFallback></Avatar>
                <Avatar className="border-2 border-background"><AvatarFallback>CD</AvatarFallback></Avatar>
                <Avatar className="border-2 border-background"><AvatarFallback>EF</AvatarFallback></Avatar>
                <Avatar className="border-2 border-background"><AvatarFallback>+3</AvatarFallback></Avatar>
              </div>
            )}
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{avatarStyle}</span>
            </div>
          </div>
        )
      case 'card':
        const cardStyle = currentComponent.variants[selectedVariant] || 'standard'
        return (
          <div className="space-y-4">
            <Card className={`w-full max-w-sm ${cardStyle === 'interactive' ? 'hover:shadow-lg transition-shadow cursor-pointer' : ''}`}>
              <CardHeader>
                <CardTitle>Заголовок карточки</CardTitle>
                <CardDescription>Описание содержимого карточки</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Содержимое карточки с полезной информацией.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Действие</Button>
              </CardFooter>
            </Card>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{cardStyle}</span>
            </div>
          </div>
        )
      case 'table':
        return (
          <Table className="w-full max-w-md">
            <TableHeader>
              <TableRow>
                <TableHead>Имя</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-right">ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Alice</TableCell>
                <TableCell>Активен</TableCell>
                <TableCell className="text-right font-mono">001</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob</TableCell>
                <TableCell>Неактивен</TableCell>
                <TableCell className="text-right font-mono">002</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )
      case 'dialog':
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Открыть Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Заголовок диалога</DialogTitle>
                <DialogDescription>Описание содержимого диалогового окна.</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )
      case 'sheet':
        const sheetSide = (currentComponent.variants[selectedVariant] || 'right') as 'top' | 'right' | 'bottom' | 'left'
        return (
          <div className="space-y-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Открыть Sheet ({sheetSide})</Button>
              </SheetTrigger>
              <SheetContent side={sheetSide}>
                <SheetHeader>
                  <SheetTitle>Панель: {sheetSide}</SheetTitle>
                  <SheetDescription>Панель открывается с {sheetSide === 'right' ? 'правой' : sheetSide === 'left' ? 'левой' : sheetSide === 'top' ? 'верхней' : 'нижней'} стороны.</SheetDescription>
                </SheetHeader>
                <div className="mt-4 text-sm text-muted-foreground">
                  Содержимое боковой панели с вариантом <span className="font-mono font-medium">{sheetSide}</span>.
                </div>
              </SheetContent>
            </Sheet>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{sheetSide}</span>
            </div>
          </div>
        )
      case 'dropdown-menu':
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Dropdown Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Меню</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Пункт 1</DropdownMenuItem>
              <DropdownMenuItem>Пункт 2</DropdownMenuItem>
              <DropdownMenuItem>Пункт 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      case 'accordion':
        const accordionType = currentComponent.variants[selectedVariant] || 'single'
        return (
          <div className="space-y-4">
            <Accordion type={accordionType === 'multiple' ? 'multiple' : 'single'} collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>Раздел 1</AccordionTrigger>
                <AccordionContent>Содержимое первого раздела аккордеона.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Раздел 2</AccordionTrigger>
                <AccordionContent>Содержимое второго раздела аккордеона.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Раздел 3</AccordionTrigger>
                <AccordionContent>Содержимое третьего раздела аккордеона.</AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{accordionType}</span>
              <p className="text-xs text-muted-foreground mt-2">
                {accordionType === 'single' ? 'Можно открыть только один раздел' : 'Можно открыть несколько разделов'}
              </p>
            </div>
          </div>
        )
      case 'tabs':
        const tabStyle = currentComponent.variants[selectedVariant] || 'boxed'
        return (
          <div className="space-y-4 w-full max-w-md">
            {tabStyle === 'boxed' && (
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Вкладка 1</TabsTrigger>
                  <TabsTrigger value="tab2">Вкладка 2</TabsTrigger>
                  <TabsTrigger value="tab3">Вкладка 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-2 text-sm">Контент вкладки 1</TabsContent>
                <TabsContent value="tab2" className="p-2 text-sm">Контент вкладки 2</TabsContent>
                <TabsContent value="tab3" className="p-2 text-sm">Контент вкладки 3</TabsContent>
              </Tabs>
            )}
            {tabStyle === 'underline' && (
              <Tabs defaultValue="tab1">
                <div className="border-b border-border">
                  <TabsList className="bg-transparent h-auto p-0">
                    <TabsTrigger 
                      value="tab1" 
                      className="bg-transparent border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent rounded-none px-4 py-2"
                    >
                      Вкладка 1
                    </TabsTrigger>
                    <TabsTrigger 
                      value="tab2" 
                      className="bg-transparent border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent rounded-none px-4 py-2"
                    >
                      Вкладка 2
                    </TabsTrigger>
                    <TabsTrigger 
                      value="tab3" 
                      className="bg-transparent border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent rounded-none px-4 py-2"
                    >
                      Вкладка 3
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="tab1" className="p-2 text-sm">Контент вкладки 1</TabsContent>
                <TabsContent value="tab2" className="p-2 text-sm">Контент вкладки 2</TabsContent>
                <TabsContent value="tab3" className="p-2 text-sm">Контент вкладки 3</TabsContent>
              </Tabs>
            )}
            {tabStyle === 'pills' && (
              <Tabs defaultValue="tab1">
                <TabsList className="bg-transparent gap-2">
                  <TabsTrigger 
                    value="tab1" 
                    className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full px-4"
                  >
                    Вкладка 1
                  </TabsTrigger>
                  <TabsTrigger 
                    value="tab2" 
                    className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full px-4"
                  >
                    Вкладка 2
                  </TabsTrigger>
                  <TabsTrigger 
                    value="tab3" 
                    className="data-[state=active]:bg-foreground data-[state=active]:text-background rounded-full px-4"
                  >
                    Вкладка 3
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-2 text-sm">Контент вкладки 1</TabsContent>
                <TabsContent value="tab2" className="p-2 text-sm">Контент вкладки 2</TabsContent>
                <TabsContent value="tab3" className="p-2 text-sm">Контент вкладки 3</TabsContent>
              </Tabs>
            )}
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{tabStyle}</span>
            </div>
          </div>
        )
      case 'radio-group':
        return (
          <RadioGroup defaultValue="option-1" className="w-full max-w-md">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-1" id="r1" />
              <Label htmlFor="r1">Опция 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-2" id="r2" />
              <Label htmlFor="r2">Опция 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-3" id="r3" />
              <Label htmlFor="r3">Опция 3</Label>
            </div>
          </RadioGroup>
        )
      case 'alert-dialog':
        return (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Удалить</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                <AlertDialogDescription>Это действие нельзя отменить.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Отмена</AlertDialogCancel>
                <AlertDialogAction>Удалить</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )
      case 'popover':
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Открыть Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-2">
                <h4 className="font-medium">Заголовок</h4>
                <p className="text-sm text-muted-foreground">Содержимое поповера с любой информацией.</p>
              </div>
            </PopoverContent>
          </Popover>
        )
      case 'drawer':
        return (
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Открыть Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Заголовок Drawer</DrawerTitle>
                <DrawerDescription>Описание содержимого выдвижного ящика.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">Содержимое</div>
            </DrawerContent>
          </Drawer>
        )
      case 'hover-card':
        return (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@username</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="flex gap-2">
                <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">User Name</h4>
                  <p className="text-xs text-muted-foreground">@username</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        )
      case 'context-menu':
        return (
          <ContextMenu>
            <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
              Правый клик здесь
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Копировать</ContextMenuItem>
              <ContextMenuItem>Вставить</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-destructive">Удалить</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        )
      case 'navigation-menu':
        return (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Продукты</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-64">
                    <li>
                      <NavigationMenuLink href="#">Продукт 1</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">Продукт 2</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">О нас</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )
      case 'menubar':
        return (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Файл</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Новый</MenubarItem>
                <MenubarItem>Открыть</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Сохранить</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Редактирование</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Отменить</MenubarItem>
                <MenubarItem>Повторить</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        )
      case 'toggle':
        const toggleVariant = currentComponent.variants[selectedVariant] || 'standard'
        return (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Toggle variant={toggleVariant === 'outline' ? 'outline' : 'default'}>Жирный</Toggle>
              <Toggle variant={toggleVariant === 'outline' ? 'outline' : 'default'}>Курсив</Toggle>
              <Toggle variant={toggleVariant === 'outline' ? 'outline' : 'default'}>Подчёркнутый</Toggle>
            </div>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{toggleVariant}</span>
            </div>
          </div>
        )
      case 'toggle-group':
        return (
          <ToggleGroup type="multiple" className="flex gap-1">
            <ToggleGroupItem value="bold" aria-label="Bold">B</ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">I</ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">U</ToggleGroupItem>
          </ToggleGroup>
        )
      case 'collapsible':
        return (
          <Collapsible defaultOpen className="w-full max-w-md space-y-2">
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-3 text-sm font-medium">
              <span>Сворачиваемый раздел</span>
              <span className="text-muted-foreground">Нажмите</span>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="rounded-md border px-4 py-3 text-sm">Скрытый контент теперь виден.</div>
            </CollapsibleContent>
          </Collapsible>
        )
      case 'calendar':
        const calendarMode = currentComponent.variants[selectedVariant] || 'single'
        return (
          <div className="space-y-4">
            <Calendar mode="single" className="rounded-md border" />
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{calendarMode}</span>
              <p className="text-xs text-muted-foreground mt-2">Примечание: режим range требует дополнительного состояния</p>
            </div>
          </div>
        )
      case 'breadcrumb':
        return (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Главная</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Компоненты</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )
      case 'pagination':
        return (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )
      case 'scroll-area':
        const scrollType = currentComponent.variants[selectedVariant] || 'vertical'
        return (
          <div className="space-y-4">
            {scrollType === 'vertical' && (
              <ScrollArea className="h-48 w-64 rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium">Vertical Scroll</h4>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm py-1">Строка {i + 1}</div>
                  ))}
                </div>
              </ScrollArea>
            )}
            {scrollType === 'horizontal' && (
              <ScrollArea className="w-96 rounded-md border">
                <div className="flex p-4 gap-4" style={{ width: 'max-content' }}>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm px-3 py-2 bg-muted rounded shrink-0">Блок {i + 1}</div>
                  ))}
                </div>
              </ScrollArea>
            )}
            {scrollType === 'both' && (
              <ScrollArea className="h-48 w-64 rounded-md border">
                <div className="p-4" style={{ width: 'max-content' }}>
                  <table className="text-sm">
                    <tbody>
                      {Array.from({ length: 15 }).map((_, i) => (
                        <tr key={i}>
                          {Array.from({ length: 10 }).map((_, j) => (
                            <td key={j} className="px-3 py-1 border border-border">{i},{j}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
            )}
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{scrollType}</span>
            </div>
          </div>
        )
      case 'label':
        return (
          <div className="space-y-2 w-full max-w-md">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
        )
      case 'resizable':
        const resizableDirection = (currentComponent.variants[selectedVariant] || 'horizontal') as 'horizontal' | 'vertical'
        return (
          <div className="space-y-4 w-full">
            <ResizablePanelGroup
              direction={resizableDirection}
              className="min-h-[200px] max-w-md rounded-md border"
            >
              <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-sm font-medium">Панель 1</div>
                  <div className="text-xs text-muted-foreground mt-1">50%</div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-sm font-medium">Панель 2</div>
                  <div className="text-xs text-muted-foreground mt-1">50%</div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{resizableDirection}</span>
            </div>
          </div>
        )
      case 'carousel':
        return (
          <div className="space-y-4 w-full max-w-md">
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-xs text-muted-foreground">
              Используйте стрелки или свайп для навигации
            </div>
          </div>
        )
      case 'toast':
        const toastType = currentComponent.variants[selectedVariant] || 'success'
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={toastType === 'success' ? 'default' : 'outline'}
                onClick={() => toast.success('Операция успешно выполнена!')}
              >
                Success
              </Button>
              <Button 
                variant={toastType === 'error' ? 'destructive' : 'outline'}
                onClick={() => toast.error('Произошла ошибка!')}
              >
                Error
              </Button>
              <Button 
                variant={toastType === 'warning' ? 'default' : 'outline'}
                onClick={() => toast.warning('Внимание! Проверьте данные.')}
              >
                Warning
              </Button>
            </div>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{toastType}</span>
            </div>
          </div>
        )
      case 'sonner':
        return (
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => toast.success('Успешно выполнено!')}>
              Success
            </Button>
            <Button variant="destructive" onClick={() => toast.error('Произошла ошибка!')}>
              Error
            </Button>
            <Button variant="outline" onClick={() => toast.info('Информационное сообщение')}>
              Info
            </Button>
          </div>
        )
      case 'form':
        return (
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="form-email">Email</Label>
              <Input id="form-email" type="email" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-password">Пароль</Label>
              <Input id="form-password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">Войти</Button>
            <p className="text-xs text-muted-foreground text-center">
              Form компонент использует react-hook-form + zod для валидации
            </p>
          </div>
        )
      case 'input-otp':
        return (
          <div className="space-y-4">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-xs text-muted-foreground">
              Введите 6-значный код подтверждения
            </p>
          </div>
        )
      case 'chart':
        const chartType = currentComponent.variants[selectedVariant] || 'bar'
        const chartData = [
          { month: 'Янв', value: 65 },
          { month: 'Фев', value: 85 },
          { month: 'Мар', value: 45 },
          { month: 'Апр', value: 95 },
          { month: 'Май', value: 70 },
          { month: 'Июн', value: 55 },
        ]
        
        const renderChart = () => {
          switch (chartType) {
            case 'bar':
              return (
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Bar dataKey="value" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )
            case 'line':
              return (
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Line type="monotone" dataKey="value" stroke="hsl(var(--foreground))" strokeWidth={2} dot={{ fill: 'hsl(var(--foreground))' }} />
                  </LineChart>
                </ResponsiveContainer>
              )
            case 'area':
              return (
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Area type="monotone" dataKey="value" stroke="hsl(var(--foreground))" fill="hsl(var(--foreground) / 0.2)" />
                  </AreaChart>
                </ResponsiveContainer>
              )
            case 'pie':
              return (
                <div className="flex items-center justify-center gap-8">
                  <div className="relative w-40 h-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      {chartData.map((item, i) => {
                        const total = chartData.reduce((sum, d) => sum + d.value, 0)
                        const offset = chartData.slice(0, i).reduce((sum, d) => sum + (d.value / total) * 100, 0)
                        const percent = (item.value / total) * 100
                        return (
                          <circle
                            key={i}
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={`hsl(var(--foreground) / ${0.3 + (i * 0.15)})`}
                            strokeWidth="20"
                            strokeDasharray={`${percent * 2.51} 251`}
                            strokeDashoffset={-offset * 2.51}
                          />
                        )
                      })}
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-semibold">100%</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    {chartData.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ background: `hsl(var(--foreground) / ${0.3 + (i * 0.15)})` }} />
                        <span>{item.month}: {item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            default:
              return null
          }
        }
        
        return (
          <div className="space-y-4 w-full">
            <div className="w-full max-w-md border rounded-md p-4">
              {renderChart()}
            </div>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Выбрано: </span>
              <span className="text-xs font-mono font-medium">{chartType}</span>
            </div>
          </div>
        )
      case 'sidebar':
        return (
          <div className="w-64 border rounded-md overflow-hidden">
            <div className="bg-muted/30 px-4 py-3 border-b">
              <span className="text-sm font-medium">Sidebar</span>
            </div>
            <div className="p-2 space-y-1">
              <div className="px-3 py-2 text-sm bg-foreground text-background rounded-sm">Дашборд</div>
              <div className="px-3 py-2 text-sm hover:bg-muted rounded-sm">Проекты</div>
              <div className="px-3 py-2 text-sm hover:bg-muted rounded-sm">Настройки</div>
            </div>
            <p className="text-xs text-muted-foreground p-3 border-t">
              Sidebar — сложный компонент для боковой навигации
            </p>
          </div>
        )
      case 'command':
        return (
          <Command className="rounded-lg border shadow-md w-full max-w-md">
            <CommandInput placeholder="Поиск команды..." />
            <CommandList>
              <CommandEmpty>Ничего не найдено.</CommandEmpty>
              <CommandGroup heading="Предложения">
                <CommandItem>
                  <span>Файл</span>
                  <CommandShortcut>⌘F</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Настройки</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
                <CommandSeparator />
                <CommandItem>
                  <span>Профиль</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        )
      default:
        return (
          <div className="text-muted-foreground text-sm">
            Демонстрация компонента "{currentComponent.name}"
          </div>
        )
    }
  }

  return (
    <div className="h-[calc(100vh-280px)] min-h-[500px]">
      {/* Единая строка заголовков - выровнены по верху */}
      <div className="grid grid-cols-[200px_220px_200px_1fr] gap-px bg-border">
        {/* Заголовок Категории */}
        <div className="bg-muted/30 px-4 py-3">
          <span className="text-xs uppercase tracking-wider font-medium">КАТЕГОРИИ</span>
        </div>
        {/* Заголовок Компоненты */}
        <div className="bg-muted/30 px-4 py-3">
          <span className="text-xs uppercase tracking-wider font-medium">КОМПОНЕНТЫ</span>
        </div>
        {/* Заголовок Варианты */}
        <div className="bg-muted/30 px-4 py-3">
          <span className="text-xs uppercase tracking-wider font-medium">ВАРИАНТЫ</span>
        </div>
        {/* Заголовок Превью с вкладками */}
        <div className="bg-muted/30 px-4 py-3 flex items-center justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="h-7">
              <TabsTrigger value="preview" className="text-xs px-3">Preview</TabsTrigger>
              <TabsTrigger value="code" className="text-xs px-3">Code</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {/* Контент колонок - выровнен по верху */}
      <div className="h-[calc(100%-44px)] grid grid-cols-[200px_220px_200px_1fr] gap-px bg-border items-start">
        {/* Колонка 1: Категории */}
        <div className="bg-background overflow-y-auto h-full">
          <div className="py-1">
            {/* Категория "Избранные" */}
            {favorites.length > 0 && (
              <button
                onClick={() => {
                  setSelectedCategory('favorites')
                  // Найти первый избранный компонент
                  const firstFav = favorites[0]
                  setSelectedComponent(firstFav)
                  setSelectedVariant(0)
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  selectedCategory === 'favorites' 
                    ? 'bg-foreground text-background' 
                    : 'hover:bg-muted'
                }`}
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <Star className="w-3 h-3 fill-current" />
                    Избранные
                  </span>
                  <span className={`text-xs ${selectedCategory === 'favorites' ? 'text-background/70' : 'text-muted-foreground'}`}>
                    {favorites.length}
                  </span>
                </span>
              </button>
            )}
            {/* Основные категории */}
            {componentsData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setSelectedComponent(category.components[0].id)
                  setSelectedVariant(0)
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-foreground text-background' 
                    : 'hover:bg-muted'
                }`}
              >
                <span className="flex items-center justify-between">
                  {category.name}
                  <span className={`text-xs ${selectedCategory === category.id ? 'text-background/70' : 'text-muted-foreground'}`}>
                    {category.components.length}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Колонка 2: Компоненты */}
        <div className="bg-background overflow-y-auto h-full">
          <div className="py-1">
            {(selectedCategory === 'favorites' 
              ? favorites.map(favId => {
                  // Найти компонент по ID во всех категориях
                  for (const cat of componentsData.categories) {
                    const comp = cat.components.find(c => c.id === favId)
                    if (comp) return comp
                  }
                  return null
                }).filter(Boolean)
              : currentCategory?.components
            )?.map((component) => component && (
              <button
                key={component.id}
                onClick={() => {
                  setSelectedComponent(component.id)
                  setSelectedVariant(0)
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  selectedComponent === component.id 
                    ? 'bg-foreground text-background' 
                    : 'hover:bg-muted'
                }`}
              >
                {component.name}
              </button>
            ))}
          </div>
        </div>

        {/* Колонка 3: Варианты */}
        <div className="bg-background overflow-y-auto h-full">
          <div className="py-1">
            {currentComponent?.variants.map((variant, index) => (
              <div
                key={variant}
                onClick={() => setSelectedVariant(index)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between gap-2 cursor-pointer select-none ${
                  selectedVariant === index 
                    ? 'bg-foreground text-background' 
                    : 'hover:bg-muted'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedVariant(index)
                  }
                }}
              >
                <span className="font-mono">{variant}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(currentComponent.id)
                  }}
                  className={`p-1 hover:bg-muted/50 rounded transition-colors ${
                    selectedVariant === index ? 'hover:bg-background/20' : ''
                  }`}
                  title={isFavorite(currentComponent.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
                >
                  <Star 
                    className={`w-3 h-3 transition-colors ${
                      isFavorite(currentComponent.id) 
                        ? 'fill-current text-yellow-500' 
                        : selectedVariant === index 
                          ? 'text-background/50 hover:text-background'
                          : 'text-muted-foreground hover:text-foreground'
                    }`} 
                  />
                </button>
              </div>
            ))}
            {(!currentComponent || currentComponent.variants.length === 0) && (
              <div className="px-4 py-2.5 text-sm text-muted-foreground">Нет вариантов</div>
            )}
          </div>
        </div>

        {/* Колонка 4: Превью/Code */}
        <div className="bg-background overflow-y-auto h-full">
          {activeTab === 'preview' ? (
            <div className="p-6">
              {currentComponent && (
                <div className="mb-4 pb-4 border-b border-border">
                  <h3 className="text-lg font-semibold">{currentComponent.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{currentComponent.description}</p>
                </div>
              )}
              {renderPreview()}
            </div>
          ) : (
            <div className="p-6">
              <pre className="text-xs font-mono bg-muted/50 p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
                <code>{currentComponent?.previewCode || '// Код не доступен'}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('libraries')

  const sections = [
    { id: 'libraries', label: 'Библиотеки' },
    { id: 'architecture', label: 'Архитектура' },
    { id: 'stacks', label: 'Связки' },
    { id: 'compare', label: 'Сравнение' },
    { id: 'components', label: 'Компоненты' },
    { id: 'design', label: 'Дизайн' },
    { id: 'decision', label: 'Выбор' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-foreground" />
              <div>
                <h1 className="font-semibold tracking-tight">ГАЙД ПО UI-СТЕКУ</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">React & Next.js / 2024-2025</p>
              </div>
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider hidden sm:block">
              Версия 1.0
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <TabButton
                key={section.id}
                active={activeSection === section.id}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </TabButton>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-8 w-full">
        {/* Section 1: Libraries */}
        {activeSection === 'libraries' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Headless */}
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Группа А</span>
                <h2 className="text-2xl font-semibold tracking-tight mt-1">HEADLESS</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Гибкость, Tailwind, малый вес. Требуют настройки дизайна, но дают полный контроль.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-px bg-border">
                {headlessLibraries.map((lib) => (
                  <LibraryCard key={lib.name} library={lib} />
                ))}
              </div>
            </div>

            {/* Styled */}
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Группа Б</span>
                <h2 className="text-2xl font-semibold tracking-tight mt-1">STYLED</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  Скорость, готовый дизайн. Имеют свою дизайн-систему. Сложнее адаптировать под уникальный макет.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                {styledLibraries.map((lib) => (
                  <LibraryCard key={lib.name} library={lib} />
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Section 2: Architecture */}
        {activeSection === 'architecture' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">АРХИТЕКТУРА</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Headless против Styled: фундаментальное влияние на процесс разработки
              </p>
            </div>

            <ArchitectureSection />
          </motion.section>
        )}

        {/* Section 3: Stacks */}
        {activeSection === 'stacks' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">РЕКОМЕНДУЕМЫЕ СВЯЗКИ</h2>
              <p className="text-sm text-muted-foreground mt-2">
                С учётом TypeScript — стандарта индустрии, отлично поддерживаемого всеми библиотеками
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {recommendedStacks.map((stack, i) => (
                <StackCard key={stack.id} stack={stack} index={i} />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold tracking-tight mb-4">СВОДНАЯ ТАБЛИЦА</h3>
              <ComparisonTable />
            </div>
          </motion.section>
        )}

        {/* Section 4: Compare */}
        {activeSection === 'compare' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">ВИЗУАЛЬНОЕ СРАВНЕНИЕ</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Радар и тепловая карта для анализа библиотек
              </p>
            </div>

            {/* Лидеры по критериям */}
            <div className="border border-border bg-background">
              <div className="px-5 py-4 border-b border-border">
                <h3 className="font-semibold tracking-tight">ЛИДЕРЫ ПО КРИТЕРИЯМ</h3>
                <p className="text-xs text-muted-foreground mt-1">Кто лучше по каждому показателю</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                {comparisonData.map((item) => (
                  <div key={item.criterion} className="bg-background p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          {item.criterion}
                        </div>
                        <div className="font-semibold">{item.winner}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                      </div>
                      <div className="text-2xl font-mono font-medium">{item.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Критерии оценки */}
            <CriteriaExplanation />

            <RadarComparison />
            
            <HeatmapChart />

            {/* Статистика библиотек */}
            <LibraryStatsTable />

            {/* Полные рекомендуемые связки */}
            <div className="border border-border bg-background">
              <div className="px-5 py-4 border-b border-border">
                <h3 className="font-semibold tracking-tight">РЕКОМЕНДУЕМЫЕ СВЯЗКИ</h3>
                <p className="text-xs text-muted-foreground mt-1">Полный технический стек для разных задач</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Стек</th>
                      <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Библиотека</th>
                      <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Тип</th>
                      <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Размер</th>
                      <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Стилизация</th>
                      <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Совместимость</th>
                      <th className="px-4 py-3 text-left uppercase text-xs tracking-wider font-medium">Для каких задач</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fullStackData.map((row, i) => (
                      <tr key={row.stack} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/10'}>
                        <td className="px-4 py-3 font-mono text-xs">{row.stack}</td>
                        <td className="px-4 py-3 font-medium">{row.library}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`
                              text-xs uppercase tracking-wider px-2 py-0.5 border
                              ${row.type === 'headless' 
                                ? 'border-foreground/30 text-foreground' 
                                : 'border-border text-muted-foreground'
                              }
                            `}
                          >
                            {row.type === 'headless' ? 'Headless' : 'Styled'}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono">{row.size}</td>
                        <td className="px-4 py-3">{row.styling}</td>
                        <td className="px-4 py-3">{row.compatibility}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.useCase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>
        )}

        {/* Section 5: Components */}
        {activeSection === 'components' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">КОМПОНЕНТЫ SHADCN/UI</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Интерактивная демонстрация всех доступных компонентов
              </p>
            </div>

            <ComponentsShowcase />
          </motion.section>
        )}

        {/* Section 6: Design */}
        {activeSection === 'design' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">РЕАЛИЗАЦИЯ ДИЗАЙНА</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Как выбор связки влияет на реализацию одного и того же макета
              </p>
            </div>

            <div className="space-y-6">
              <DesignScenario
                title="СЦЕНАРИЙ: Уникальный дизайн"
                headlessRating={5}
                styledRating={1}
                headlessDesc="Отлично. Просто пишете Tailwind классы. Никто не мешает. Результат идеален."
                styledDesc="Сложно. Приходится переопределять дефолтные стили, сбрасывать отступы, бороться с !important."
                conclusion="Если дизайн уникальный, Headless-стек экономит нервы."
              />

              <DesignScenario
                title="СЦЕНАРИЙ: Типовой дизайн"
                headlessRating={2}
                styledRating={5}
                headlessDesc="Долго. Придётся верстать таблицу, пагинацию и стили форм с нуля."
                styledDesc="Отлично. Всё готово, просто ставите компоненты."
                conclusion="Если дизайн типовой, Styled-стек экономит время."
              />
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold tracking-tight mb-4">КОГДА ПРИМЕНЯТЬ RADIX UI?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Radix UI — это чистый двигатель. Стоит выбирать отдельно от Shadcn/ui в трёх случаях:
              </p>
              <RadixSection />
            </div>
          </motion.section>
        )}

        {/* Section 6: Decision */}
        {activeSection === 'decision' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">АЛГОРИТМ ВЫБОРА</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Быстрый способ принять правильное решение
              </p>
            </div>

            <DecisionAlgorithm />

            <div className="mt-8 border border-border p-6 bg-muted/5">
              <h3 className="text-lg font-semibold tracking-tight mb-4">БЫСТРАЯ СПРАВКА</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    Headless — выбирайте если:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">-</span>
                      <span>Нужен уникальный дизайн</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">-</span>
                      <span>Важен малый размер бандла</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">-</span>
                      <span>Используете Tailwind CSS</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">-</span>
                      <span>Хотите полный контроль над UI</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    Styled — выбирайте если:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">-</span>
                      <span>Нужна быстрая разработка</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">-</span>
                      <span>Стандартный enterprise-дизайн</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">-</span>
                      <span>Много сложных таблиц и форм</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">-</span>
                      <span>Нет жёстких требований к дизайну</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-wider">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-foreground" />
              <span>UI Stack Guide</span>
            </div>
            <div className="flex items-center gap-4">
              <span>2025</span>
              <span className="w-px h-3 bg-border" />
              <span>TypeScript + Tailwind + shadcn/ui</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
