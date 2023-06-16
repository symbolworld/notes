## 前言

之前用picgo来设置github图床，但是总是出现上传图片失败的情况，下面介绍另外一种配置图床的方式。

这种方式就是用cloudflare + github仓库

## 第一步、注册cloudflare

官网地址：https://cloudflare.com

注册过程很简单就不介绍了，用邮箱注册就行了。注册完成后，登录上去。

## 第二步、与git仓库建立连接

1、点击Workers和Pages页面

![](https://picgo-5n8.pages.dev/img/add-app.png)

2、点击创建应用程序，再点击Pages，然后连接到Git

![](https://picgo-5n8.pages.dev/img/connect-git.png)



3、添加GitHub账户和选择仓库

如果没有，就需要提前注册和创建

![](https://picgo-5n8.pages.dev/img/world.png)

选择仓库后，点配置，等几分钟就能自动配置完成了，到这一步设置部分就完成了，接下来就是访问了。

4、访问图片外链URL

![](https://picgo-5n8.pages.dev/img/page.png)

点击访问站点，可以访问到自己在cloudflare上的位置，但此时无法访问到对应的图片，因为要加上图片路径才能访问。

比如示例中图片是存放在PicGo仓库，PicGo仓库中有个img文件夹，所有图片都放在这个文件夹内。

![](https://picgo-5n8.pages.dev/img/img-test.png)

所以正确访问方式就是：`<自己的站点 + 图片的路径>`

比如我想访问img文件夹下面的1.png，那么URL就是：`<https://picgo-5n8.pages.dev/img/1.png>`

5、新增图片

后续只需要将图片放到github仓库中，cloudflare会自动同步过去。如果发现没有同步过去，只需要等一分钟左右就好了，同步要也时间。有了图片外链，写文档，写博客就方便很多啦。

