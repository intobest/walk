cls
@echo off
CLS
color 0a
cd/D %~dp0
 
Title ���̱���-WALK���
REM =========���̶��忪ʼ=========
set p1=walk-tools
set p2=walk-data
set p3=walk-redis
set p4=walk-cache
set p5=walk-batis
set p6=walk-mq
set p7=walk-shiro
set p8=walk-fusioncharts
set p9=walk-base
set p10=walk-restful
set p11=walk-activiti
set p12=walk-console
set p13=walk-boot
set p14=walk-boot-plugin
REM =========���̶������=========

:cl
echo ���̱���
echo =============================
echo   0���������й���
echo   1������%p1%
echo   2������%p2%
echo   3������%p3%
echo   4������%p4%
echo   5������%p5%
echo   6������%p6%
echo   7������%p7%
echo   8������%p8%
echo   9������%p9%
echo   10������%p10%
echo   11������%p11%
echo   12������%p12%
echo   13������%p13%
echo   14������%p14%
echo   e����   ��
echo =============================
set /p choice= ��ѡ�����ֱ�����Ӧ�Ĺ��̣�Ȼ�󰴻س�:
echo.
if /i "%choice%"=="" echo.
if /i "%choice%"=="0" goto s0
if /i "%choice%"=="1" goto s1
if /i "%choice%"=="2" goto s2
if /i "%choice%"=="3" goto s3
if /i "%choice%"=="4" goto s4
if /i "%choice%"=="5" goto s5
if /i "%choice%"=="6" goto s6
if /i "%choice%"=="7" goto s7
if /i "%choice%"=="8" goto s8
if /i "%choice%"=="9" goto s9
if /i "%choice%"=="10" goto s10
if /i "%choice%"=="11" goto s11
if /i "%choice%"=="12" goto s12
if /i "%choice%"=="13" goto s13
if /i "%choice%"=="14" goto s14
if /i "%choice%"=="e" goto EX

echo.
echo              ѡ����Ч������������
echo.
echo.
goto cl

:s0
set project=
goto build

:s1
set project=p0%choice%-%p1%:
goto build

:s2
set project=p0%choice%-%p2%:
goto build

:s3
set project=p0%choice%-%p3%:
goto build

:s4
set project=p0%choice%-%p4%:
goto build

:s5
set project=p0%choice%-%p5%:
goto build

:s6
set project=p0%choice%-%p6%:
goto build

:s7
set project=p0%choice%-%p7%:
goto build

:s8
set project=p0%choice%-%p8%:
goto build

:s9
set project=p0%choice%-%p9%:
goto build

:s10
set project=p%choice%-%p10%:
goto build

:s11
set project=p%choice%-%p11%:
goto build

:s12
set project=p%choice%-%p12%:
goto build

:s13
set project=p%choice%-%p13%:
goto build

:s14
set project=p%choice%-%p14%:
goto build

:EX
exit

:build
if "%project%"=="" echo ��ʼ�������й���...
if not "%project%"=="" echo ��ʼ����%project%...
call gradle/gradlew.bat %project%cleanEclipseClasspath %project%eclipse %project%clean
goto cl